import { UserDto } from '../dto/user.dto';
import { getRepository } from 'typeorm';
import UserEntity from '../entity/user.entity';
import debug from 'debug';
import * as argon2 from "argon2"
import { v4 as uuidv4 } from 'uuid';


const log: debug.IDebugger = debug('app:in-memory-dao');

class UserDao {
   
    constructor() {
        log('Created new instance o');
    }

    async register(user: UserDto) {
        const {name,email,password} = user
        const addRepository = getRepository(UserEntity)
        const doesUserExist = await addRepository.findOne({ email: email })

        if(doesUserExist?.email === email) throw new Error("Username taken")

        const uid = uuidv4()
        try{
            const passwordHashed = await argon2.hash(password)
            const newUser = addRepository.create({
                name:name.trim(),
                email:email.trim(),
                password:passwordHashed,
                uid:uid
            });
            const result =  await addRepository.save(newUser);
            return {
                name,
                email,
                uid,
                createdAt:result.createdAt
            }
        } catch(err) {
            console.log(err)
            throw new Error("error")
        }
    }

    async getUser(uid: string) {
        const addRepository = getRepository(UserEntity)
        const user = await addRepository.findOne({ uid: uid })
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