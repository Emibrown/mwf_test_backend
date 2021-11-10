"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const user_entity_1 = __importDefault(require("./user/entity/user.entity"));
const config_1 = __importDefault(require("./common/utils/config"));
class DB {
    constructor() {
        this.config = {
            type: 'postgres',
            host: config_1.default.db_host,
            port: 5432,
            username: config_1.default.db_username,
            password: config_1.default.db_password,
            database: config_1.default.db,
            synchronize: true,
            entities: [user_entity_1.default],
        };
    }
    intializeDB() {
        (0, typeorm_1.createConnection)(this.config)
            .then(() => {
            console.log('DB is connected');
        })
            .catch((err) => {
            console.log(err);
        });
    }
}
exports.default = new DB();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9kYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRCQUEwQjtBQUMxQixxQ0FBNkU7QUFDN0UsNEVBQW1EO0FBQ25ELG1FQUEwQztBQUcxQyxNQUFNLEVBQUU7SUFBUjtRQUVJLFdBQU0sR0FBc0I7WUFDeEIsSUFBSSxFQUFFLFVBQVU7WUFDaEIsSUFBSSxFQUFFLGdCQUFNLENBQUMsT0FBTztZQUNwQixJQUFJLEVBQUUsSUFBSTtZQUNWLFFBQVEsRUFBRSxnQkFBTSxDQUFDLFdBQVc7WUFDNUIsUUFBUSxFQUFFLGdCQUFNLENBQUMsV0FBVztZQUM1QixRQUFRLEVBQUUsZ0JBQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLFFBQVEsRUFBRSxDQUFDLHFCQUFVLENBQUM7U0FDekIsQ0FBQztJQWFOLENBQUM7SUFYRyxXQUFXO1FBQ1AsSUFBQSwwQkFBZ0IsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQzVCLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztDQUVKO0FBRUQsa0JBQWUsSUFBSSxFQUFFLEVBQUUsQ0FBQyJ9