import 'reflect-metadata';
import { ConnectionOptions, createConnection, getConnection } from 'typeorm';
import debug from 'debug';
import InventoryEntity from './inventory/entity/inventory.entity';
import config from "./common/utils/config"


const log: debug.IDebugger = debug('app:mongoose-service');

class DB {

    config: ConnectionOptions = {
        type: 'postgres',
        host: config.db_host,
        port: 5432,
        username: config.db_username,
        password: "",
        database: config.db,
        synchronize: true,
        entities: [InventoryEntity],
    };

    intializeDB() {
        createConnection(this.config)
        .then(() => {
            console.log('DB is connected');
        })
        .catch((err) => {
            console.log(err);
        });
       
    }

}

export default new DB();
