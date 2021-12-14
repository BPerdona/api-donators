import { getCustomRepository } from 'typeorm';
import { AdminRepositories} from '../../repositories/AdminRepositorie';
import { sign } from "jsonwebtoken"; 

class CheckAdminService {
    
    async checkIfExists(nome, password) {
        
        const adminRepositorie = getCustomRepository(AdminRepositories);

        const adminExists = await adminRepositorie.findOne({ nome });

        if(adminExists && adminExists.password === password) {
            const token = sign({
                userId: adminExists.id, 
            },"TOKEN HASH",{
                subject: adminExists.nome,
                expiresIn: "1d"
            }); 
            return token;
        } else {
            throw new Error("Acess Denied");
       }

    }
    
}

export { CheckAdminService};