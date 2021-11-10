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
const joi_1 = __importDefault(require("joi"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:users-controller');
const registerSchema = joi_1.default.object({
    "email": joi_1.default.string().email().required(),
    "password": joi_1.default.string().min(8).max(128).required(),
    "name": joi_1.default.string().max(50).required(),
});
class UserMiddleware {
    extractUid(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.uid = req.params.uid;
            next();
        });
    }
    validateRegister(req, res, next) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const value = yield registerSchema.validate(req.body);
                if (value === null || value === void 0 ? void 0 : value.error) {
                    const errorMessage = (_a = value.error) === null || _a === void 0 ? void 0 : _a.details[0].message;
                    console.log(errorMessage);
                    return res.status(400).json({
                        error: true,
                        message: errorMessage
                    });
                }
                next();
            }
            catch (err) {
                return res.status(400).json({
                    error: true,
                    message: "An internal server validation error has occurred"
                });
            }
        });
    }
}
exports.default = new UserMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdXNlci9taWRkbGV3YXJlL3VzZXIubWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUdBLDhDQUFxQjtBQUNyQixrREFBMEI7QUFFMUIsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLHNCQUFzQixDQUFDLENBQUM7QUFFM0QsTUFBTSxjQUFjLEdBQUcsYUFBRyxDQUFDLE1BQU0sQ0FBQztJQUM5QixPQUFPLEVBQUUsYUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUN4QyxVQUFVLEVBQUUsYUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFO0lBQ25ELE1BQU0sRUFBRSxhQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRTtDQUMxQyxDQUFDLENBQUE7QUFFRixNQUFNLGNBQWM7SUFFVixVQUFVLENBQ1osR0FBb0IsRUFDcEIsR0FBcUIsRUFDckIsSUFBMEI7O1lBRTFCLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQzlCLElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQztLQUFBO0lBRUssZ0JBQWdCLENBQ2xCLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCOzs7WUFFMUIsSUFBSTtnQkFDQSxNQUFNLEtBQUssR0FBRyxNQUFNLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUNyRCxJQUFHLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxLQUFLLEVBQUU7b0JBQ2IsTUFBTSxZQUFZLEdBQUcsTUFBQSxLQUFLLENBQUMsS0FBSywwQ0FBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQTtvQkFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtvQkFDekIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDeEIsS0FBSyxFQUFFLElBQUk7d0JBQ1gsT0FBTyxFQUFFLFlBQVk7cUJBQ3hCLENBQUMsQ0FBQTtpQkFDTDtnQkFDRCxJQUFJLEVBQUUsQ0FBQTthQUNUO1lBQ0QsT0FBTyxHQUFHLEVBQUU7Z0JBQ1IsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDeEIsS0FBSyxFQUFFLElBQUk7b0JBQ1gsT0FBTyxFQUFFLGtEQUFrRDtpQkFDOUQsQ0FBQyxDQUFBO2FBQ0w7O0tBQ0o7Q0FRSjtBQUVELGtCQUFlLElBQUksY0FBYyxFQUFFLENBQUMifQ==