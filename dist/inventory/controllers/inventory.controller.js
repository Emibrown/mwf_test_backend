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
                console.log(req.body);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52ZW50b3J5LmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9pbnZlbnRvcnkvY29udHJvbGxlcnMvaW52ZW50b3J5LmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFQSxzRkFBNkQ7QUFJN0QscURBQXFEO0FBQ3JELGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUMzRCxNQUFNLG1CQUFtQjtJQUVmLE9BQU8sQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUNyRCxJQUFHO2dCQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM1QyxNQUFNLFlBQVksR0FBaUIsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDNUMsTUFBTSxJQUFJLEdBQUcsTUFBTSwyQkFBZ0IsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzFELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzVCO1lBQUEsT0FBTSxDQUFDLEVBQUM7Z0JBQ0wsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ2pCLEtBQUssRUFBRSxPQUFPO2lCQUNqQixDQUFDLENBQUM7YUFDTjtRQUNMLENBQUM7S0FBQTtJQUVLLFlBQVksQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUMxRCxJQUFHO2dCQUNDLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFBO2dCQUMxQixNQUFNLE1BQU0sR0FBRyxNQUFNLDJCQUFnQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekQsSUFBRyxNQUFNLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtvQkFDaEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7d0JBQ2pCLFFBQVEsRUFBQyxDQUFDO3dCQUNWLFNBQVMsRUFBQyxJQUFJO3FCQUNqQixDQUFDLENBQUM7aUJBQ047cUJBQ0c7b0JBQ0EsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO29CQUNyQyxNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtvQkFDakMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ2hDO2FBQ0o7WUFBQSxPQUFNLENBQUMsRUFBQztnQkFDTCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDakIsS0FBSyxFQUFFLE9BQU87aUJBQ2pCLENBQUMsQ0FBQzthQUNOO1FBQ0wsQ0FBQztLQUFBO0lBRUssUUFBUSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3RELE1BQU0sRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQTtZQUNoQyxJQUFHO2dCQUNDLE1BQU0sMkJBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksRUFBQyxRQUFRLENBQUMsQ0FBQTtnQkFDOUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDNUI7WUFBQSxPQUFNLENBQUMsRUFBQztnQkFDTCxJQUFJLFlBQVksR0FBRyxvQ0FBb0MsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLFlBQVksS0FBSyxFQUFFO29CQUN0QixZQUFZLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztpQkFDMUI7Z0JBQ0QsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNsQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDakIsS0FBSyxFQUFFLFlBQVk7aUJBQ3RCLENBQUMsQ0FBQzthQUNOO1FBQ0wsQ0FBQztLQUFBO0NBR0o7QUFFRCxrQkFBZSxJQUFJLG1CQUFtQixFQUFFLENBQUMifQ==