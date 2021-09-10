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
// we import our newly created user services
const inventory_service_1 = __importDefault(require("../services/inventory.service"));
// we use debug with a custom context as described in Part 1
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:users-controller');
class InventoryController {
    addItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.expiry = new Date(req.body.expiry);
            const addLotOfItem = req.body;
            const item = yield inventory_service_1.default.addItem(addLotOfItem);
            res.status(200).send({});
        });
    }
    itemQuantity(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52ZW50b3J5LmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9pbnZlbnRvcnkvY29udHJvbGxlcnMvaW52ZW50b3J5LmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFHQSw0Q0FBNEM7QUFDNUMsc0ZBQTZEO0FBSTdELDREQUE0RDtBQUM1RCxrREFBMEI7QUFFMUIsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDM0QsTUFBTSxtQkFBbUI7SUFFZixPQUFPLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDckQsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QyxNQUFNLFlBQVksR0FBaUIsR0FBRyxDQUFDLElBQUksQ0FBQztZQUM1QyxNQUFNLElBQUksR0FBRyxNQUFNLDJCQUFnQixDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMxRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixDQUFDO0tBQUE7SUFFSyxZQUFZLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDMUQsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUE7WUFDMUIsTUFBTSxNQUFNLEdBQUcsTUFBTSwyQkFBZ0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekQsSUFBRyxNQUFNLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtnQkFDaEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ2pCLFFBQVEsRUFBQyxDQUFDO29CQUNWLFNBQVMsRUFBQyxJQUFJO2lCQUNqQixDQUFDLENBQUM7YUFDTjtpQkFDRztnQkFDQSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7Z0JBQ3JDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO2dCQUNqQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNoQztRQUNMLENBQUM7S0FBQTtJQUVLLFFBQVEsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN0RCxNQUFNLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUE7WUFDaEMsSUFBRztnQkFDQyxNQUFNLDJCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUMsUUFBUSxDQUFDLENBQUE7Z0JBQzlDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzVCO1lBQUEsT0FBTSxDQUFDLEVBQUM7Z0JBQ0wsSUFBSSxZQUFZLEdBQUcsb0NBQW9DLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxZQUFZLEtBQUssRUFBRTtvQkFDdEIsWUFBWSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7aUJBQzFCO2dCQUNELEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDbEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ2pCLEtBQUssRUFBRSxZQUFZO2lCQUN0QixDQUFDLENBQUM7YUFDTjtRQUNMLENBQUM7S0FBQTtDQUdKO0FBRUQsa0JBQWUsSUFBSSxtQkFBbUIsRUFBRSxDQUFDIn0=