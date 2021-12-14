import { getCustomRepository } from 'typeorm';
import { DonationRespositories } from '../../repositories/DonationRespositories';

class GetDonationByIdService{
    
    async getById(id: number){

        const donationRespositories = getCustomRepository(DonationRespositories);

        const donation = await donationRespositories.findOne({id});

        if(donation != undefined){
            return donation;
         } else{
            throw new Error("Nenhuma doação encontrada com esse ID!!!");
        }
     }
 }

export { GetDonationByIdService }