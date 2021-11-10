import { UserDto } from '../dto/user.dto';
import { getRepository } from 'typeorm';
import UserEntity from '../entity/user.entity';
import debug from 'debug';
import * as argon2 from "argon2"
import { v4 as uuidv4 } from 'uuid';


const log: debug.IDebugger = debug('app:in-memory-dao');

class UserDao {
   
    constructor() {
        log('Created new instance of InventoryDao');
    }

    async register(user: UserDto) {
        const {name,email,password} = user
        const doesUserExist = await UserEntity.findOne({ email: email })

        if(doesUserExist?.email === email) throw new Error("Username taken")

        const uid = uuidv4()

        try{
            const passwordHashed = await argon2.hash(password)

            const newUser = new UserEntity()
            newUser.name = name.trim()
            newUser.email = email.trim()
            newUser.password = passwordHashed
            newUser.uid = uid
            const result =   await newUser.save()
            return {
                name,
                email,
                uid,
                createdAt:result.createdAt
            }
        } catch(err) {
           throw err;
        }
    }

    async getUser(uid: string) {
        const user = await UserEntity.findOne({ uid: uid })

        if(!user) throw new Error("Invalied uid")

        return {
            name:user.name,
            email:user.email,
            uid: user.uid,
            createdAt:user.createdAt
        }
    }

 

}

export default new UserDao();