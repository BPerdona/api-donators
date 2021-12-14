import { getCustomRepository } from 'typeorm';
import { DonatorRespositorie } from '../../repositories/DonatorRespositorie';

class GetAllDonatorService {
    
    async getAll() {
        const donatorRepository = getCustomRepository(DonatorRespositorie);

        const donatorList = await donatorRepository.find();

        return donatorList;
    }
    
}

export { GetAllDonatorService };