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
const user_service_1 = __importDefault(require("../services/user.service"));
// debug with a custom context as described in Part 1
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:users-controller');
class UserController {
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield user_service_1.default.register(req.body);
                res.status(200).send({
                    message: "User registered",
                    data: result
                });
            }
            catch (e) {
                console.log(e);
                if (String(e).includes("Username taken")) {
                    return res.status(400).send({
                        error: true,
                        message: "Email is taken"
                    });
                }
                res.status(500).send({
                    error: true,
                    message: "An internal server error has occurred"
                });
            }
        });
    }
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { uid } = req.body;
            try {
                const result = yield user_service_1.default.getUser(uid);
                res.status(200).send({
                    message: "User found",
                    data: result
                });
            }
            catch (e) {
                console.log(e);
                if (String(e).includes("Invalied uid")) {
                    return res.status(400).send({
                        error: true,
                        message: "Invalied uid"
                    });
                }
                res.status(500).send({
                    error: true,
                    message: "An internal server error has occurred"
                });
            }
        });
    }
}
exports.default = new UserController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdXNlci9jb250cm9sbGVycy91c2VyLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFQSw0RUFBbUQ7QUFHbkQscURBQXFEO0FBQ3JELGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUUzRCxNQUFNLGNBQWM7SUFFVixRQUFRLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDdEQsSUFBRztnQkFDQyxNQUFNLE1BQU0sR0FBRyxNQUFNLHNCQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDbkQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ2pCLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLElBQUksRUFBRSxNQUFNO2lCQUNmLENBQUMsQ0FBQzthQUNOO1lBQUEsT0FBTSxDQUFDLEVBQUM7Z0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDZCxJQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtvQkFDckMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDeEIsS0FBSyxFQUFFLElBQUk7d0JBQ1gsT0FBTyxFQUFFLGdCQUFnQjtxQkFDNUIsQ0FBQyxDQUFBO2lCQUNMO2dCQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNqQixLQUFLLEVBQUUsSUFBSTtvQkFDWCxPQUFPLEVBQUUsdUNBQXVDO2lCQUNuRCxDQUFDLENBQUE7YUFDTDtRQUNMLENBQUM7S0FBQTtJQUVLLE9BQU8sQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUNyRCxNQUFNLEVBQUMsR0FBRyxFQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQTtZQUN0QixJQUFHO2dCQUNDLE1BQU0sTUFBTSxHQUFHLE1BQU0sc0JBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQzdDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNqQixPQUFPLEVBQUUsWUFBWTtvQkFDckIsSUFBSSxFQUFFLE1BQU07aUJBQ2YsQ0FBQyxDQUFDO2FBQ047WUFBQSxPQUFNLENBQUMsRUFBQztnQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNkLElBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRTtvQkFDbkMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDeEIsS0FBSyxFQUFFLElBQUk7d0JBQ1gsT0FBTyxFQUFFLGNBQWM7cUJBQzFCLENBQUMsQ0FBQTtpQkFDTDtnQkFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDakIsS0FBSyxFQUFFLElBQUk7b0JBQ1gsT0FBTyxFQUFFLHVDQUF1QztpQkFDbkQsQ0FBQyxDQUFBO2FBQ0w7UUFDTCxDQUFDO0tBQUE7Q0FHSjtBQUVELGtCQUFlLElBQUksY0FBYyxFQUFFLENBQUMifQ==