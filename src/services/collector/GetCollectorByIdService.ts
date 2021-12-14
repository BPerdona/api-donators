import { getCustomRepository } from 'typeorm';
import { CollectorRepositorie } from '../../repositories/CollectorRepositorie';

class GetCollectorByIdService {
    
    async getById(id: number) {
        const collectorRepository = getCustomRepository(CollectorRepositorie);

        const collector = await collectorRepository.findOne({ id });

        if(collector !== undefined) {
            return collector;
        } else {
            throw new Error('Nenhuma unidade coletora encontrada com esse ID!!!');
        }

    }
    
}

export { GetCollectorByIdService };