import { Request, Response } from 'express';
import { CheckAdminService } from '../../services/admin/CheckAdminService';

class CheckAdminController{
    
    async execute(req: Request, res: Response) {
        try {
            const checkAdminService = new CheckAdminService();

            const nome = req.params.username;
            const password = req.params.password;


            const result = await checkAdminService.checkIfExists(nome, password);


            return res.status(200).json(result);
        } catch(err) {
            return res.status(403).json(err.message);
        }
    }
}

export { CheckAdminController };