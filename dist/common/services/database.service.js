"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:mongoose-service');
class DatabaseService {
    constructor() {
        this.connectionOptions = {
            type: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
            synchronize: true,
        };
    }
}
exports.default = new DatabaseService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9kYXRhYmFzZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0Esa0RBQTBCO0FBRTFCLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBRTNELE1BQU0sZUFBZTtJQUFyQjtRQUVZLHNCQUFpQixHQUFHO1lBQ3hCLElBQUksRUFBRSxVQUFVO1lBQ2hCLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWE7WUFDL0IsSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztZQUN2QyxRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhO1lBQ25DLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQjtZQUN2QyxRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXO1lBQ2pDLFFBQVEsRUFBRTtnQkFDUixTQUFTLEdBQUcsMEJBQTBCO2FBQ3ZDO1lBQ0QsV0FBVyxFQUFFLElBQUk7U0FDcEIsQ0FBQztJQUVOLENBQUM7Q0FBQTtBQUVELGtCQUFlLElBQUksZUFBZSxFQUFFLENBQUMifQ==