import express from 'express';
import moment from 'moment';
import UserService from '../services/user.service';
import Joi from "joi"
import debug from 'debug';

const log: debug.IDebugger = debug('app:users-controller');

const registerSchema = Joi.object({
    "email": Joi.string().email().required(),
    "password": Joi.string().min(8).max(128).required(),
    "name": Joi.string().max(50).required(),
})

class UserMiddleware {

    async extractUid(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        req.body.uid = req.params.uid;
        next();
    }
    
    async validateRegister(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        try {
            const value = await registerSchema.validate(req.body)
            if(value?.error) {
                const errorMessage = value.error?.details[0].message
                console.log(errorMessage)
                return res.status(400).json({
                    error: true,
                    message: errorMessage
                })
            }
            next()
        }
        catch (err) { 
            return res.status(400).json({
                error: true,
                message: "An internal server validation error has occurred"
            })
        }
    }

  


   
    

}

export default new UserMiddleware();