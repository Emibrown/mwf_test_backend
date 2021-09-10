"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const inventory_controller_1 = __importDefault(require("./controllers/inventory.controller"));
const inventory_middleware_1 = __importDefault(require("./middleware/inventory.middleware"));
class InventoryRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'InventoryRoutes');
    }
    configureRoutes() {
        this.app.param(`item`, inventory_middleware_1.default.extractItem);
        this.app.post(`/:item/add`, [
            inventory_middleware_1.default.validateRequiredAddItemBodyFields,
            inventory_middleware_1.default.checkForExpiriedItem,
            inventory_controller_1.default.addItem
        ]);
        this.app.post(`/:item/sell`, [
            inventory_middleware_1.default.checkForQuantity,
            inventory_controller_1.default.sellItem
        ]);
        this.app.get(`/:item/quantity`, [
            inventory_controller_1.default.itemQuantity
        ]);
        return this.app;
    }
}
exports.InventoryRoutes = InventoryRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52ZW50b3J5LnJvdXRlcy5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9pbnZlbnRvcnkvaW52ZW50b3J5LnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEseUVBQW9FO0FBQ3BFLDhGQUFxRTtBQUNyRSw2RkFBb0U7QUFHcEUsTUFBYSxlQUFnQixTQUFRLHlDQUFrQjtJQUNuRCxZQUFZLEdBQXdCO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsZUFBZTtRQUVYLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSw4QkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV4RCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDeEIsOEJBQW1CLENBQUMsaUNBQWlDO1lBQ3JELDhCQUFtQixDQUFDLG9CQUFvQjtZQUN4Qyw4QkFBbUIsQ0FBQyxPQUFPO1NBQzlCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUMxQiw4QkFBbUIsQ0FBQyxnQkFBZ0I7WUFDcEMsOEJBQW1CLENBQUMsUUFBUTtTQUM5QixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRTtZQUM3Qiw4QkFBbUIsQ0FBQyxZQUFZO1NBQ2xDLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0NBQ0o7QUExQkQsMENBMEJDIn0=