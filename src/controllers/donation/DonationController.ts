import { Request, Response} from 'express';
import { CreateDonationService } from '../../services/donation/CreateDonationService';
import { DeleteDonationByIdService } from '../../services/donation/DeleteDonationByIdService';
import { GetAllDonationService } from '../../services/donation/GetAllDonationService';
import { GetDonationByIdService } from '../../services/donation/GetDonationByIdService';
import { UpdateDonationByIdService } from '../../services/donation/UpdateDonationByIdService';

class DonationController {
    async create(req: Request, res: Response){
        try {
            const{doador_rg, volume, data, orgao_coletor_id} = req.body;

            const createDonationService = new CreateDonationService();

            const donation = await createDonationService.execute({
                doador_rg,
                volume,
                data,
                orgao_coletor_id
            })

            return res.status(201).json(donation);
        } catch (err) {
            return res.status(500).json(err.message).end();
        }
    }

    async delete(req: Request, res: Response){
        try{
            const id = Number(req.params.ID);

            const deleteDonationByIdService = new DeleteDonationByIdService();

            const donationToDelete = await deleteDonationByIdService.deleteById(id);

            return res.status(200).json(donationToDelete);
        }catch(err){
            return res.status(404).json(err.message);
        }
    }

    async getAll(req: Request, res: Response){
        try{
            const getAllDonationService = new GetAllDonationService();

            const donation = await getAllDonationService.getAll();

            return res.status(200).json(donation);
        }catch(err){
            return res.status(500).json(err.message);
        }
    }


    async getById(req: Request, res: Response){
        try{
            const id = Number(req.params.ID);

            const getDonationByIdService = new GetDonationByIdService();

            const donation = await getDonationByIdService.getById(id);

            return res.status(200).json(donation);
        }catch(err){
            return res.status(404).json(err.message);
        }
    }

    async update(req: Request, res: Response){
        try{
            const id = Number(req.params.ID);

            const updateDonationByIdService = new UpdateDonationByIdService();

            const donator = await updateDonationByIdService.updateDonator(id,req);

            return res.status(200).json(donator);
        }catch(err){
            return res.status(404).json(err.message);
        }
    }

}

export { DonationController }