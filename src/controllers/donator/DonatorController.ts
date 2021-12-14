import { Request, Response} from 'express';
import { CreateDonatorService } from '../../services/donator/CreateDonatorService';
import { DeleteDonatorByRgService } from '../../services/donator/DeleteDonatorByRgService';
import { GetAllDonatorService } from '../../services/donator/GetAllDonatorService';
import { GetDonatorByRgService } from '../../services/donator/GetDonatorByRgService';
import { UpdateDonatorByRgService } from '../../services/donator/UpdateDonatorByRgService';

class DonatorController {
    
    async create(req: Request, res: Response) {
        try {
            const {nome, rg, orgao_expeditor_rg,data_de_nascimento,estado_civil,
                naturalidade,genero,profissao_id,grupo_sanguineo,rh_sanguineo,doador_de_medula,
                data_de_expedicao,email,telefone1,telefone2,telefone3,status,cep,numero_residencia,
                filiacao_mae,filiacao_pai,estado,cidade,bairro,rua} = req.body;
            
            const createDonatorService = new CreateDonatorService();
            
            const donator = await createDonatorService.execute({nome, rg, orgao_expeditor_rg,
                data_de_nascimento,estado_civil,naturalidade,genero,profissao_id,grupo_sanguineo,
                rh_sanguineo,doador_de_medula,data_de_expedicao,email,telefone1,telefone2,
                telefone3,status,cep,numero_residencia,filiacao_mae,filiacao_pai,estado,cidade,bairro
                ,rua});

            return res.status(201).json(donator);
        } catch (err) {
            return res.status(409).json(err.message);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const rg = Number(req.params.RG);

            const deleteDonatorByRgService = new DeleteDonatorByRgService();
            
            const donatorToDelete = await deleteDonatorByRgService.deleteByRg(rg);

            return res.status(200).json(donatorToDelete);
        } catch (err) {
            return res.status(404).json(err.message);
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const getAllDonatorService = new GetAllDonatorService();
            
            const donator = await getAllDonatorService.getAll();

            return res.status(200).json(donator);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    async getByRg(req: Request, res: Response) {
        try {
            const rg = Number(req.params.RG);

            const getDonatorByRgService = new GetDonatorByRgService();

            const donator = await getDonatorByRgService.getByRg(rg);

            return res.status(200).json(donator);
        } catch (err) {
            return res.status(404).json(err.message);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const rg = Number(req.params.RG);

            const updateDonatorByRgService = new UpdateDonatorByRgService();

            const donator = await updateDonatorByRgService.updateDonator(rg,req);

            return res.status(200).json(donator);
        } catch (err) {
            return res.status(404).json(err.message);
        }
    }   

}

export { DonatorController };