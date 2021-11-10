import 'reflect-metadata';
import { ConnectionOptions, createConnection, getConnection } from 'typeorm';
import UserEntity from './user/entity/user.entity';
import config from "./common/utils/config"


class DB {

    config: ConnectionOptions = {
        type: 'postgres',
        host: config.db_host,
        port: 5432,
        username: config.db_username,
        password: config.db_password,
        database: config.db,
        synchronize: true,
        entities: [UserEntity],
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
