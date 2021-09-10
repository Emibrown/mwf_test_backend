import { InventoryDto } from '../dto/inventory.dto';
import { getRepository, LessThan, MoreThan, getManager } from 'typeorm';
import InventoryEntity from '../entity/inventory.entity';
import utils from '../../common/utils/utils';
import debug from 'debug';


const log: debug.IDebugger = debug('app:in-memory-dao');

class InventoryDao {
   
    constructor() {
        log('Created new instance of InventoryDao');
    }

    async addItem(item: InventoryDto) {
        const addRepository = getRepository(InventoryEntity)
        const newItem = addRepository.create(item);
        await addRepository.save(newItem);
        return newItem;
    }

    async itemQuantity(name: string) {
        const addRepository = getRepository(InventoryEntity)
        const items = addRepository.createQueryBuilder("inventoryEntity")
        .where("inventoryEntity.name = :name", { name: name })
        .andWhere("inventoryEntity.expiry > :expiry", { expiry: new Date() })
        .select("SUM(inventoryEntity.quantity)::int as quantity")
        .addSelect("MIN(inventoryEntity.expiry)", "validTill")
        .getRawOne(); 
        return items;
    }

    shouldRetryTransaction(err: unknown) {
        const code = typeof err === 'object' ? String((err as any).code) : null
        return code === '40001' || code === '40P01';
    }

    async sellItem(name: string, quantity: number) {
        let selling_quantity = quantity
        try {
          return await getManager().transaction("SERIALIZABLE",async transactionalEntityManager => {
            const repository = getRepository(InventoryEntity)

            const itemQuantity = await transactionalEntityManager.createQueryBuilder()
            .from(InventoryEntity,"inventoryEntity")
            .where("inventoryEntity.name = :name", { name: name })
            .andWhere("inventoryEntity.expiry > :expiry", { expiry: new Date() })
            .select("SUM(inventoryEntity.quantity)::int as quantity")
            .addSelect("MIN(inventoryEntity.expiry)", "validTill")
            .getRawOne(); 
            if(itemQuantity.quantity < selling_quantity){
                throw new Error('Quantity exceed available quantity');
            }

            const items = await transactionalEntityManager.find(InventoryEntity,{
                where: {
                    "name" : name,
                    "expiry": MoreThan(new Date()),
                    "quantity": MoreThan(0)
                },
                order: {
                    expiry: "ASC",
                }
            })

            await utils.asyncForEach(items, async (item,index) => {
                let remainder;
                let sell = selling_quantity
                if(selling_quantity = 0){
                    return;
                }
                if(item.quantity >= sell){
                    remainder = item.quantity-sell;
                    selling_quantity = 0
                }else{
                    remainder = 0
                    selling_quantity = sell - item.quantity
                }
                let currentItem = await repository.findOne({ id: item.id });
                if(currentItem){
                    currentItem.quantity = remainder;
                    await transactionalEntityManager.save(currentItem)
                }
            });
        });
        } catch (err) {
          if (this.shouldRetryTransaction(err)) {
            // retry logic   
            await this.sellItem(name, quantity)  
          } else {
            throw err;
          }
        }
      }

 
}

export default new InventoryDao();