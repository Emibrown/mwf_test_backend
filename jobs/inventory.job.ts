import * as schedule from "node-schedule";
import { getRepository, LessThan, MoreThan, getManager } from 'typeorm';
import InventoryEntity from "../inventory/entity/inventory.entity";


class InventoryJob {

    constructor() {

    }

    public CleanDb() {
        schedule.scheduleJob('* * * * *', async function () {
            const addRepository = getRepository(InventoryEntity)
            const newItem = await addRepository.delete({expiry:LessThan(new Date())})
            console.log(newItem)
        });
    }
}

export default new InventoryJob();