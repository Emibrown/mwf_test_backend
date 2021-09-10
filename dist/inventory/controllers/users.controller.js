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
class UsersController {
    addItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const addLotOfItem = req.body;
            yield inventory_service_1.default.addItem(addLotOfItem);
            res.status(200).send({});
        });
    }
}
exports.default = new UsersController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ludmVudG9yeS9jb250cm9sbGVycy91c2Vycy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBR0EsNENBQTRDO0FBQzVDLHNGQUE2RDtBQVE3RCw0REFBNEQ7QUFDNUQsa0RBQTBCO0FBRTFCLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQzNELE1BQU0sZUFBZTtJQUVYLE9BQU8sQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUNyRCxNQUFNLFlBQVksR0FBaUIsR0FBRyxDQUFDLElBQUksQ0FBQztZQUM1QyxNQUFNLDJCQUFnQixDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM3QyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixDQUFDO0tBQUE7Q0FHSjtBQUVELGtCQUFlLElBQUksZUFBZSxFQUFFLENBQUMifQ==