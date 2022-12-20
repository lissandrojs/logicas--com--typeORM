import { Request, Response } from "express";
import userFindOneService  from "../services/user/userFindOne.service";

const userFindOneController = async (req: Request, res: Response)=>{
    const {id} = req.params
    try {
        const userFind = await userFindOneService({id})
        return res.status(200).json(userFind)

    } catch (error) {

        return res.status(400).json(error.message)
        
    }
}

export default userFindOneController