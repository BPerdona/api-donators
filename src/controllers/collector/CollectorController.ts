import { Request, Response} from 'express';
import { CreateCollectorService } from '../../services/collector/CreateCollectorService';
import { DeleteCollectorByIdService } from '../../services/collector/DeleteCollectorByIdService';
import { GetAllCollectorService } from '../../services/collector/GetAllCollectorService';
import { GetCollectorByIdService } from '../../services/collector/GetCollectorByIdService';
import { UpdateCollectorByIdService } from '../../services/collector/UpdateCollectorByIdService';

class CollectorController {
    
    async create(req: Request, res: Response) {
        try {
            const {nome,telefone,cidade} = req.body;
            
            const createCollectorService = new CreateCollectorService();
            
            const collector = await createCollectorService.execute({nome,telefone,cidade});

            return res.status(201).json(collector);
        } catch (err) {
            return res.status(409).json(err.message);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = Number(req.params.ID);

            const deleteCollectorByIdService = new DeleteCollectorByIdService();

            const collector = await deleteCollectorByIdService.delete(id);

            return res.status(200).json(collector);
        } catch (err) {
            return res.status(404).json(err.message);
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const getAllCollectorService = new GetAllCollectorService();
            
            const collectorList = await getAllCollectorService.getAll();

            return res.status(200).json(collectorList);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const id = Number(req.params.ID);

            const getCollectorByIdService = new GetCollectorByIdService();

            const collector = await getCollectorByIdService.getById(id);

            return res.status(200).json(collector);
        } catch (err) {
            return res.status(404).json(err.message);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id = Number(req.params.ID);

            const updateCollectorByIdService = new UpdateCollectorByIdService();

            const collector = await updateCollectorByIdService.update(id, req);

            return res.status(200).json(collector);
        } catch (err) {
            return res.status(404).json(err.message);
        }
    }

}

export { CollectorController };