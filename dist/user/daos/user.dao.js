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
const user_entity_1 = __importDefault(require("../entity/user.entity"));
const debug_1 = __importDefault(require("debug"));
const argon2 = __importStar(require("argon2"));
const uuid_1 = require("uuid");
const log = (0, debug_1.default)('app:in-memory-dao');
class UserDao {
    constructor() {
        log('Created new instance of InventoryDao');
    }
    register(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = user;
            const doesUserExist = yield user_entity_1.default.findOne({ email: email });
            if ((doesUserExist === null || doesUserExist === void 0 ? void 0 : doesUserExist.email) === email)
                throw new Error("Username taken");
            const uid = (0, uuid_1.v4)();
            try {
                const passwordHashed = yield argon2.hash(password);
                const newUser = new user_entity_1.default();
                newUser.name = name.trim();
                newUser.email = email.trim();
                newUser.password = passwordHashed;
                newUser.uid = uid;
                const result = yield newUser.save();
                return {
                    name,
                    email,
                    uid,
                    createdAt: result.createdAt
                };
            }
            catch (err) {
                throw err;
            }
        });
    }
    getUser(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_entity_1.default.findOne({ uid: uid });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi91c2VyL2Rhb3MvdXNlci5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsd0VBQStDO0FBQy9DLGtEQUEwQjtBQUMxQiwrQ0FBZ0M7QUFDaEMsK0JBQW9DO0FBR3BDLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBRXhELE1BQU0sT0FBTztJQUVUO1FBQ0ksR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVLLFFBQVEsQ0FBQyxJQUFhOztZQUN4QixNQUFNLEVBQUMsSUFBSSxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsR0FBRyxJQUFJLENBQUE7WUFDbEMsTUFBTSxhQUFhLEdBQUcsTUFBTSxxQkFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBO1lBRWhFLElBQUcsQ0FBQSxhQUFhLGFBQWIsYUFBYSx1QkFBYixhQUFhLENBQUUsS0FBSyxNQUFLLEtBQUs7Z0JBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1lBRXBFLE1BQU0sR0FBRyxHQUFHLElBQUEsU0FBTSxHQUFFLENBQUE7WUFFcEIsSUFBRztnQkFDQyxNQUFNLGNBQWMsR0FBRyxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7Z0JBRWxELE1BQU0sT0FBTyxHQUFHLElBQUkscUJBQVUsRUFBRSxDQUFBO2dCQUNoQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtnQkFDMUIsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUE7Z0JBQzVCLE9BQU8sQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFBO2dCQUNqQyxPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQTtnQkFDakIsTUFBTSxNQUFNLEdBQUssTUFBTSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUE7Z0JBQ3JDLE9BQU87b0JBQ0gsSUFBSTtvQkFDSixLQUFLO29CQUNMLEdBQUc7b0JBQ0gsU0FBUyxFQUFDLE1BQU0sQ0FBQyxTQUFTO2lCQUM3QixDQUFBO2FBQ0o7WUFBQyxPQUFNLEdBQUcsRUFBRTtnQkFDVixNQUFNLEdBQUcsQ0FBQzthQUNaO1FBQ0wsQ0FBQztLQUFBO0lBRUssT0FBTyxDQUFDLEdBQVc7O1lBQ3JCLE1BQU0sSUFBSSxHQUFHLE1BQU0scUJBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQTtZQUVuRCxJQUFHLENBQUMsSUFBSTtnQkFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFBO1lBRXpDLE9BQU87Z0JBQ0gsSUFBSSxFQUFDLElBQUksQ0FBQyxJQUFJO2dCQUNkLEtBQUssRUFBQyxJQUFJLENBQUMsS0FBSztnQkFDaEIsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO2dCQUNiLFNBQVMsRUFBQyxJQUFJLENBQUMsU0FBUzthQUMzQixDQUFBO1FBQ0wsQ0FBQztLQUFBO0NBSUo7QUFFRCxrQkFBZSxJQUFJLE9BQU8sRUFBRSxDQUFDIn0=