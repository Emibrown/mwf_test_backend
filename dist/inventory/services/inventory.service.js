"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inventory_dao_1 = __importDefault(require("../daos/inventory.dao"));
class InventoryService {
    addItem(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return inventory_dao_1.default.addItem(resource);
        });
    }
    itemQuantity(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return inventory_dao_1.default.itemQuantity(name);
        });
    }
    sellItem(name, quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            return inventory_dao_1.default.sellItem(name, quantity);
        });
    }
}
exports.default = new InventoryService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52ZW50b3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9pbnZlbnRvcnkvc2VydmljZXMvaW52ZW50b3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwRUFBaUQ7QUFJakQsTUFBTSxnQkFBZ0I7SUFFWixPQUFPLENBQUMsUUFBc0I7O1lBQ2hDLE9BQU8sdUJBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsQ0FBQztLQUFBO0lBRUssWUFBWSxDQUFDLElBQVk7O1lBQzNCLE9BQU8sdUJBQVksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDMUMsQ0FBQztLQUFBO0lBRUssUUFBUSxDQUFDLElBQVksRUFBQyxRQUFnQjs7WUFDeEMsT0FBTyx1QkFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUE7UUFDaEQsQ0FBQztLQUFBO0NBRUo7QUFFRCxrQkFBZSxJQUFJLGdCQUFnQixFQUFFLENBQUMifQ==