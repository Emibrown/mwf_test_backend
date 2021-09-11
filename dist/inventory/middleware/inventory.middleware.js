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
const moment_1 = __importDefault(require("moment"));
const inventory_service_1 = __importDefault(require("../services/inventory.service"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:users-controller');
class InventoryMiddleware {
    extractItem(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.name = req.params.item;
            next();
        });
    }
    validateRequiredAddItemBodyFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body && req.body.quantity && req.body.expiry) {
                next();
            }
            else {
                res.status(400).send({
                    error: `Missing required fields`,
                });
            }
        });
    }
    checkForQuantity(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, quantity } = req.body;
            if (typeof quantity === 'number') {
                const item = yield inventory_service_1.default.itemQuantity(name);
                if (item.quantity) {
                    const itemQuantity = item.quantity;
                    if (itemQuantity < quantity) {
                        res.status(400).send({
                            error: `Quantity exceed available quantity`,
                        });
                    }
                    else {
                        next();
                    }
                }
                else {
                    res.status(400).send({
                        error: `Item not available or expired`,
                    });
                }
            }
            else {
                res.status(400).send({
                    error: `Quantity most be a number`,
                });
            }
        });
    }
    checkForExpiriedItem(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const todayDate = (0, moment_1.default)();
            const itemDate = (0, moment_1.default)(req.body.expiry);
            const dDiff = itemDate.diff(todayDate);
            if (dDiff >= 0) {
                next();
            }
            else {
                res.status(400).send({
                    error: `Item already expiried`,
                });
            }
        });
    }
}
exports.default = new InventoryMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52ZW50b3J5Lm1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9pbnZlbnRvcnkvbWlkZGxld2FyZS9pbnZlbnRvcnkubWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLG9EQUE0QjtBQUM1QixzRkFBNkQ7QUFFN0Qsa0RBQTBCO0FBRTFCLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQzNELE1BQU0sbUJBQW1CO0lBRWYsV0FBVyxDQUNiLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCOztZQUUxQixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQyxJQUFJLEVBQUUsQ0FBQztRQUNYLENBQUM7S0FBQTtJQUVLLGlDQUFpQyxDQUNuQyxHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjs7WUFFMUIsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNsRCxJQUFJLEVBQUUsQ0FBQzthQUNWO2lCQUFNO2dCQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNqQixLQUFLLEVBQUUseUJBQXlCO2lCQUNuQyxDQUFDLENBQUM7YUFDTjtRQUNMLENBQUM7S0FBQTtJQUVLLGdCQUFnQixDQUNsQixHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjs7WUFFMUIsTUFBTSxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFBO1lBQ2hDLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxFQUFFO2dCQUM5QixNQUFNLElBQUksR0FBRyxNQUFNLDJCQUFnQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDdEQsSUFBRyxJQUFJLENBQUMsUUFBUSxFQUFDO29CQUNiLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUE7b0JBQ2xDLElBQUcsWUFBWSxHQUFHLFFBQVEsRUFBQzt3QkFDdkIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7NEJBQ2pCLEtBQUssRUFBRSxvQ0FBb0M7eUJBQzlDLENBQUMsQ0FBQztxQkFDTjt5QkFBSTt3QkFDRCxJQUFJLEVBQUUsQ0FBQTtxQkFDVDtpQkFDSjtxQkFBSTtvQkFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDakIsS0FBSyxFQUFFLCtCQUErQjtxQkFDekMsQ0FBQyxDQUFDO2lCQUNOO2FBQ0o7aUJBQUk7Z0JBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ2pCLEtBQUssRUFBRSwyQkFBMkI7aUJBQ3JDLENBQUMsQ0FBQzthQUNOO1FBQ0wsQ0FBQztLQUFBO0lBR0ssb0JBQW9CLENBQ3RCLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCOztZQUUxQixNQUFNLFNBQVMsR0FBRyxJQUFBLGdCQUFNLEdBQUUsQ0FBQztZQUMzQixNQUFNLFFBQVEsR0FBRyxJQUFBLGdCQUFNLEVBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6QyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtnQkFDWixJQUFJLEVBQUUsQ0FBQzthQUNWO2lCQUFJO2dCQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNqQixLQUFLLEVBQUUsdUJBQXVCO2lCQUNqQyxDQUFDLENBQUM7YUFDTjtRQUNMLENBQUM7S0FBQTtDQUdKO0FBRUQsa0JBQWUsSUFBSSxtQkFBbUIsRUFBRSxDQUFDIn0=