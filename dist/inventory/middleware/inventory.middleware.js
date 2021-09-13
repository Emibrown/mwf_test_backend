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
            const { quantity, expiry } = req.body;
            if (req.body && quantity && expiry) {
                if (typeof quantity === 'number' && typeof expiry === 'number') {
                    next();
                }
                else {
                    res.status(400).send({
                        error: `Invalied data`,
                    });
                }
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
            try {
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
            }
            catch (e) {
                res.status(400).send({
                    error: `error`,
                });
            }
        });
    }
    checkForExpiriedItem(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const todayDate = (0, moment_1.default)();
            const itemDate = (0, moment_1.default)(req.body.expiry);
            const dDiff = itemDate.diff(todayDate);
            if (dDiff > 0) {
                next();
            }
            else {
                res.status(400).send({
                    error: `Item already expiried`,
                });
            }
            // const date = new Date()
            // const todayDate = date.getTime()
            // const itemDate = req.body.expiry;
            // if (todayDate < itemDate) {
            //     next();
            // }else{
            //     res.status(400).send({
            //         error: `Item already expiried`,
            //     });
            // }
        });
    }
}
exports.default = new InventoryMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52ZW50b3J5Lm1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9pbnZlbnRvcnkvbWlkZGxld2FyZS9pbnZlbnRvcnkubWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLG9EQUE0QjtBQUM1QixzRkFBNkQ7QUFFN0Qsa0RBQTBCO0FBRTFCLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQzNELE1BQU0sbUJBQW1CO0lBRWYsV0FBVyxDQUNiLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCOztZQUUxQixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQyxJQUFJLEVBQUUsQ0FBQztRQUNYLENBQUM7S0FBQTtJQUVLLGlDQUFpQyxDQUNuQyxHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjs7WUFFMUIsTUFBTSxFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFBO1lBQ2xDLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxRQUFRLElBQUksTUFBTSxFQUFFO2dCQUNoQyxJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7b0JBQzVELElBQUksRUFBRSxDQUFDO2lCQUNWO3FCQUFJO29CQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUNqQixLQUFLLEVBQUUsZUFBZTtxQkFDekIsQ0FBQyxDQUFDO2lCQUNOO2FBQ0o7aUJBQU07Z0JBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ2pCLEtBQUssRUFBRSx5QkFBeUI7aUJBQ25DLENBQUMsQ0FBQzthQUNOO1FBQ0wsQ0FBQztLQUFBO0lBRUssZ0JBQWdCLENBQ2xCLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCOztZQUUxQixJQUFHO2dCQUNDLE1BQU0sRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQTtnQkFDaEMsSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLEVBQUU7b0JBQzlCLE1BQU0sSUFBSSxHQUFHLE1BQU0sMkJBQWdCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUN0RCxJQUFHLElBQUksQ0FBQyxRQUFRLEVBQUM7d0JBQ2IsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQTt3QkFDbEMsSUFBRyxZQUFZLEdBQUcsUUFBUSxFQUFDOzRCQUN2QixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQ0FDakIsS0FBSyxFQUFFLG9DQUFvQzs2QkFDOUMsQ0FBQyxDQUFDO3lCQUNOOzZCQUFJOzRCQUNELElBQUksRUFBRSxDQUFBO3lCQUNUO3FCQUNKO3lCQUFJO3dCQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDOzRCQUNqQixLQUFLLEVBQUUsK0JBQStCO3lCQUN6QyxDQUFDLENBQUM7cUJBQ047aUJBQ0o7cUJBQUk7b0JBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7d0JBQ2pCLEtBQUssRUFBRSwyQkFBMkI7cUJBQ3JDLENBQUMsQ0FBQztpQkFDTjthQUNKO1lBQUEsT0FBTSxDQUFDLEVBQUM7Z0JBQ0wsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ2pCLEtBQUssRUFBRSxPQUFPO2lCQUNqQixDQUFDLENBQUM7YUFDTjtRQUNMLENBQUM7S0FBQTtJQUdLLG9CQUFvQixDQUN0QixHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjs7WUFFMUIsTUFBTSxTQUFTLEdBQUcsSUFBQSxnQkFBTSxHQUFFLENBQUM7WUFDM0IsTUFBTSxRQUFRLEdBQUcsSUFBQSxnQkFBTSxFQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekMsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7Z0JBQ1gsSUFBSSxFQUFFLENBQUM7YUFDVjtpQkFBSTtnQkFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDakIsS0FBSyxFQUFFLHVCQUF1QjtpQkFDakMsQ0FBQyxDQUFDO2FBQ047WUFFRCwwQkFBMEI7WUFDMUIsbUNBQW1DO1lBQ25DLG9DQUFvQztZQUVwQyw4QkFBOEI7WUFDOUIsY0FBYztZQUNkLFNBQVM7WUFDVCw2QkFBNkI7WUFDN0IsMENBQTBDO1lBQzFDLFVBQVU7WUFDVixJQUFJO1FBRVIsQ0FBQztLQUFBO0NBR0o7QUFFRCxrQkFBZSxJQUFJLG1CQUFtQixFQUFFLENBQUMifQ==