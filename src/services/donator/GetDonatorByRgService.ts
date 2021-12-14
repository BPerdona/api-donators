import { getCustomRepository } from 'typeorm';
import { DonatorRespositorie } from '../../repositories/DonatorRespositorie';

class GetDonatorByRgService {
    
    async getByRg(rg: number) {
        const donatorRepository = getCustomRepository(DonatorRespositorie);

        const donator = await donatorRepository.findOne({ rg });

        if(donator != undefined) {
            return donator;
        } else {
            throw new Error('Nenhum doador encontrado com esse RG!!!');
        }

    }
    
}

export { GetDonatorByRgService };