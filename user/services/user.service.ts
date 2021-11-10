import UserDao from '../daos/user.dao';
import { CRUD } from '../../common/interfaces/crud.interface';
import { UserDto } from '../dto/user.dto';

class UserService implements CRUD {

    async register(newUser:UserDto) {
        return UserDao.register(newUser);
    }

    async getUser(uid:string) {
        return UserDao.getUser(uid);
    }


}

export default new UserService();
