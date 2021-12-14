import { getCustomRepository } from 'typeorm';
import { CollectorRepositorie } from '../../repositories/CollectorRepositorie';

class GetAllCollectorService {
    
    async getAll() {
        const collectorRepository = getCustomRepository(CollectorRepositorie);

        const collectorList = await collectorRepository.find();

        return collectorList;
    }
    
}

export { GetAllCollectorService };