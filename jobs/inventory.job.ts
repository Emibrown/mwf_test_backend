import * as schedule from "node-schedule";
import { getRepository, LessThan, MoreThan, getManager, LessThanOrEqual } from 'typeorm';
import InventoryEntity from "../inventory/entity/inventory.entity";


class InventoryJob {

    constructor() {

    }

    public CleanDb() {
        schedule.scheduleJob('*/59 * * * *', async function () {
            const addRepository = getRepository(InventoryEntity)
            await addRepository.delete({expiry:LessThanOrEqual(new Date())})
        });
    }
}

export default new InventoryJob();