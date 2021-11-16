"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const typeorm_1 = require("typeorm");
const user_entity_1 = __importDefault(require("../entity/user.entity"));
const debug_1 = __importDefault(require("debug"));
const argon2 = __importStar(require("argon2"));
const uuid_1 = require("uuid");
const log = (0, debug_1.default)('app:in-memory-dao');
class UserDao {
    constructor() {
        log('Created new instance o');
    }
    register(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = user;
            const addRepository = (0, typeorm_1.getRepository)(user_entity_1.default);
            const doesUserExist = yield addRepository.findOne({ email: email });
            if ((doesUserExist === null || doesUserExist === void 0 ? void 0 : doesUserExist.email) === email)
                throw new Error("Username taken");
            const uid = (0, uuid_1.v4)();
            try {
                const passwordHashed = yield argon2.hash(password);
                const newUser = addRepository.create({
                    name: name.trim(),
                    email: email.trim(),
                    password: passwordHashed,
                    uid: uid
                });
                const result = yield addRepository.save(newUser);
                return {
                    name,
                    email,
                    uid,
                    createdAt: result.createdAt
                };
            }
            catch (err) {
                console.log(err);
                throw new Error("error");
            }
        });
    }
    getUser(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            const addRepository = (0, typeorm_1.getRepository)(user_entity_1.default);
            const user = yield addRepository.findOne({ uid: uid });
            if (!user)
                throw new Error("Invalied uid");
            return {
                name: user.name,
                email: user.email,
                uid: user.uid,
                createdAt: user.createdAt
            };
        });
    }
}
exports.default = new UserDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi91c2VyL2Rhb3MvdXNlci5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EscUNBQXdDO0FBQ3hDLHdFQUErQztBQUMvQyxrREFBMEI7QUFDMUIsK0NBQWdDO0FBQ2hDLCtCQUFvQztBQUdwQyxNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUV4RCxNQUFNLE9BQU87SUFFVDtRQUNJLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFSyxRQUFRLENBQUMsSUFBYTs7WUFDeEIsTUFBTSxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLEdBQUcsSUFBSSxDQUFBO1lBQ2xDLE1BQU0sYUFBYSxHQUFHLElBQUEsdUJBQWEsRUFBQyxxQkFBVSxDQUFDLENBQUE7WUFDL0MsTUFBTSxhQUFhLEdBQUcsTUFBTSxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7WUFFbkUsSUFBRyxDQUFBLGFBQWEsYUFBYixhQUFhLHVCQUFiLGFBQWEsQ0FBRSxLQUFLLE1BQUssS0FBSztnQkFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUE7WUFFcEUsTUFBTSxHQUFHLEdBQUcsSUFBQSxTQUFNLEdBQUUsQ0FBQTtZQUNwQixJQUFHO2dCQUNDLE1BQU0sY0FBYyxHQUFHLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtnQkFDbEQsTUFBTSxPQUFPLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQztvQkFDakMsSUFBSSxFQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQ2hCLEtBQUssRUFBQyxLQUFLLENBQUMsSUFBSSxFQUFFO29CQUNsQixRQUFRLEVBQUMsY0FBYztvQkFDdkIsR0FBRyxFQUFDLEdBQUc7aUJBQ1YsQ0FBQyxDQUFDO2dCQUNILE1BQU0sTUFBTSxHQUFJLE1BQU0sYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbEQsT0FBTztvQkFDSCxJQUFJO29CQUNKLEtBQUs7b0JBQ0wsR0FBRztvQkFDSCxTQUFTLEVBQUMsTUFBTSxDQUFDLFNBQVM7aUJBQzdCLENBQUE7YUFDSjtZQUFDLE9BQU0sR0FBRyxFQUFFO2dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7YUFDM0I7UUFDTCxDQUFDO0tBQUE7SUFFSyxPQUFPLENBQUMsR0FBVzs7WUFDckIsTUFBTSxhQUFhLEdBQUcsSUFBQSx1QkFBYSxFQUFDLHFCQUFVLENBQUMsQ0FBQTtZQUMvQyxNQUFNLElBQUksR0FBRyxNQUFNLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQTtZQUN0RCxJQUFHLENBQUMsSUFBSTtnQkFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFBO1lBQ3pDLE9BQU87Z0JBQ0gsSUFBSSxFQUFDLElBQUksQ0FBQyxJQUFJO2dCQUNkLEtBQUssRUFBQyxJQUFJLENBQUMsS0FBSztnQkFDaEIsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO2dCQUNiLFNBQVMsRUFBQyxJQUFJLENBQUMsU0FBUzthQUMzQixDQUFBO1FBQ0wsQ0FBQztLQUFBO0NBSUo7QUFFRCxrQkFBZSxJQUFJLE9BQU8sRUFBRSxDQUFDIn0=