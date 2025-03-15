import Express, { Request, Response } from "express";

const routerAuth = Express.Router();

routerAuth.post('/login', async(req:Request, res:Response) => {
    try {
        const {email, password} = req.body
        
    } catch (error) {
        
    }
})

module.exports = routerAuth