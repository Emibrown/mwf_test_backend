"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const debug_1 = __importDefault(require("debug"));
const inventory_entity_1 = __importDefault(require("./inventory/entity/inventory.entity"));
const config_1 = __importDefault(require("./common/utils/config"));
const log = (0, debug_1.default)('app:mongoose-service');
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
            entities: [inventory_entity_1.default],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9kYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRCQUEwQjtBQUMxQixxQ0FBNkU7QUFDN0Usa0RBQTBCO0FBQzFCLDJGQUFrRTtBQUNsRSxtRUFBMEM7QUFHMUMsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLHNCQUFzQixDQUFDLENBQUM7QUFFM0QsTUFBTSxFQUFFO0lBQVI7UUFFSSxXQUFNLEdBQXNCO1lBQ3hCLElBQUksRUFBRSxVQUFVO1lBQ2hCLElBQUksRUFBRSxnQkFBTSxDQUFDLE9BQU87WUFDcEIsSUFBSSxFQUFFLElBQUk7WUFDVixRQUFRLEVBQUUsZ0JBQU0sQ0FBQyxXQUFXO1lBQzVCLFFBQVEsRUFBRSxnQkFBTSxDQUFDLFdBQVc7WUFDNUIsUUFBUSxFQUFFLGdCQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsSUFBSTtZQUNqQixRQUFRLEVBQUUsQ0FBQywwQkFBZSxDQUFDO1NBQzlCLENBQUM7SUFhTixDQUFDO0lBWEcsV0FBVztRQUNQLElBQUEsMEJBQWdCLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUM1QixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7Q0FFSjtBQUVELGtCQUFlLElBQUksRUFBRSxFQUFFLENBQUMifQ==