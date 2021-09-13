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
const inventory_service_1 = __importDefault(require("../services/inventory.service"));
// debug with a custom context as described in Part 1
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:users-controller');
class InventoryController {
    addItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                req.body.expiry = new Date(req.body.expiry);
                const addLotOfItem = req.body;
                const item = yield inventory_service_1.default.addItem(addLotOfItem);
                res.status(200).send({});
            }
            catch (e) {
                res.status(400).send({
                    error: "error",
                });
            }
        });
    }
    itemQuantity(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const name = req.body.name;
                const result = yield inventory_service_1.default.itemQuantity(name);
                if (result.quantity == 0 || result.quantity == null) {
                    res.status(200).send({
                        quantity: 0,
                        validTill: null
                    });
                }
                else {
                    var date = new Date(result.validTill);
                    result.validTill = date.getTime();
                    res.status(200).send(result);
                }
            }
            catch (e) {
                res.status(400).send({
                    error: "error",
                });
            }
        });
    }
    sellItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, quantity } = req.body;
            try {
                yield inventory_service_1.default.sellItem(name, quantity);
                res.status(200).send({});
            }
            catch (e) {
                let errorMessage = "Failed to do something exceptional";
                if (e instanceof Error) {
                    errorMessage = e.message;
                }
                log(errorMessage);
                res.status(400).send({
                    error: errorMessage,
                });
            }
        });
    }
}
exports.default = new InventoryController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52ZW50b3J5LmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9pbnZlbnRvcnkvY29udHJvbGxlcnMvaW52ZW50b3J5LmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFQSxzRkFBNkQ7QUFJN0QscURBQXFEO0FBQ3JELGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUMzRCxNQUFNLG1CQUFtQjtJQUVmLE9BQU8sQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUNyRCxJQUFHO2dCQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzVDLE1BQU0sWUFBWSxHQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUM1QyxNQUFNLElBQUksR0FBRyxNQUFNLDJCQUFnQixDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDMUQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDNUI7WUFBQSxPQUFNLENBQUMsRUFBQztnQkFDTCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDakIsS0FBSyxFQUFFLE9BQU87aUJBQ2pCLENBQUMsQ0FBQzthQUNOO1FBQ0wsQ0FBQztLQUFBO0lBRUssWUFBWSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzFELElBQUc7Z0JBQ0MsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUE7Z0JBQzFCLE1BQU0sTUFBTSxHQUFHLE1BQU0sMkJBQWdCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6RCxJQUFHLE1BQU0sQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO29CQUNoRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDakIsUUFBUSxFQUFDLENBQUM7d0JBQ1YsU0FBUyxFQUFDLElBQUk7cUJBQ2pCLENBQUMsQ0FBQztpQkFDTjtxQkFDRztvQkFDQSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7b0JBQ3JDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO29CQUNqQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDaEM7YUFDSjtZQUFBLE9BQU0sQ0FBQyxFQUFDO2dCQUNMLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNqQixLQUFLLEVBQUUsT0FBTztpQkFDakIsQ0FBQyxDQUFDO2FBQ047UUFDTCxDQUFDO0tBQUE7SUFFSyxRQUFRLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDdEQsTUFBTSxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFBO1lBQ2hDLElBQUc7Z0JBQ0MsTUFBTSwyQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFDLFFBQVEsQ0FBQyxDQUFBO2dCQUM5QyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM1QjtZQUFBLE9BQU0sQ0FBQyxFQUFDO2dCQUNMLElBQUksWUFBWSxHQUFHLG9DQUFvQyxDQUFDO2dCQUN4RCxJQUFJLENBQUMsWUFBWSxLQUFLLEVBQUU7b0JBQ3RCLFlBQVksR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDO2lCQUMxQjtnQkFDRCxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ2xCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNqQixLQUFLLEVBQUUsWUFBWTtpQkFDdEIsQ0FBQyxDQUFDO2FBQ047UUFDTCxDQUFDO0tBQUE7Q0FHSjtBQUVELGtCQUFlLElBQUksbUJBQW1CLEVBQUUsQ0FBQyJ9