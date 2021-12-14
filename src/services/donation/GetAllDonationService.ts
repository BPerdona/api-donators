import { getCustomRepository } from 'typeorm';
import { DonationRespositories } from '../../repositories/DonationRespositories';

class GetAllDonationService{

    async getAll(){
        const donationRespositories = getCustomRepository(DonationRespositories);

        const donationList = await donationRespositories.find();

        return donationList;
    }
}

export{ GetAllDonationService }