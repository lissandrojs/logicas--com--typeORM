import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const userFindOneService = async({id})=>{
    const userRepository =  AppDataSource.getRepository(User)

    const userFind = await userRepository.findOne({where:{id}});
    return userFind
}

export default userFindOneService;