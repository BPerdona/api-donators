import { Request, Response} from 'express';
import { GetAllProfissaoService } from '../../services/profession/GetAllProfissaoService';
import { CreateProfissaoService } from '../../services/profession/CreateProfissaoService';

class ProfissaoController {
    
    async getAll(req: Request, res: Response) {
        try {
            const getAllProfissaoService = new GetAllProfissaoService();
            
            const profissao = await getAllProfissaoService.getAll();

            return res.status(200).json(profissao);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    async create(req: Request, res: Response){
        try {
            const{ nome } = req.body;

            const createProfissaoService = new CreateProfissaoService();

            const profissao = await createProfissaoService.execute({
                nome
            })

            return res.status(201).json(profissao);
        } catch (err) {
            return res.status(409).json(err.message).end();
        }
    }
}

export { ProfissaoController };