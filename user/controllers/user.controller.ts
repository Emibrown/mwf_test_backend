import express from 'express';

import UserService from '../services/user.service';
import { UserDto } from '../dto/user.dto';

// debug with a custom context as described in Part 1
import debug from 'debug';

const log: debug.IDebugger = debug('app:users-controller');

class UserController {
    
    async register(req: express.Request, res: express.Response) {
        try{
            const result = await UserService.register(req.body)
            res.status(200).send({
                message: "User registered",
                data: result
            });
        }catch(e){
            console.log(e)
            if(String(e).includes("Username taken")) {
                return res.status(400).send({
                    error: true,
                    message: "Email is taken"
                })
            }
            res.status(500).send({
                error: true,
                message: "An internal server error has occurred"
            })
        }
    }

    async getUser(req: express.Request, res: express.Response) {
        const {uid} = req.body
        try{
            const result = await UserService.getUser(uid)
            res.status(200).send({
                message: "User found",
                data: result
            });
        }catch(e){
            console.log(e)
            if(String(e).includes("Invalied uid")) {
                return res.status(400).send({
                    error: true,
                    message: "Invalied uid"
                })
            }
            res.status(500).send({
                error: true,
                message: "An internal server error has occurred"
            })
        }
    }

    
}

export default new UserController();