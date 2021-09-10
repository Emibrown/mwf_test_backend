import InventoryDao from '../daos/inventory.dao';
import { CRUD } from '../../common/interfaces/crud.interface';
import { InventoryDto } from '../dto/inventory.dto';

class InventoryService implements CRUD {

    async addItem(resource: InventoryDto) {
        return InventoryDao.addItem(resource);
    }

    async itemQuantity(name: string) {
        return InventoryDao.itemQuantity(name)
    }

    async sellItem(name: string,quantity: number) {
        return InventoryDao.sellItem(name, quantity)
    }

}

export default new InventoryService();
