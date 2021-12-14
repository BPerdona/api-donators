import { getCustomRepository } from 'typeorm';
import { DonationRespositories } from '../../repositories/DonationRespositories';
import { LogRepositorie } from '../../repositories/LogRepositorie';

class DeleteDonationByIdService{

    async deleteById(id: number){
        const donationRepository = getCustomRepository(DonationRespositories);
        const logRepository = getCustomRepository(LogRepositorie);

        const donation = await donationRepository.findOne({id});

        if(donation !== undefined){
            const donatorTODelete = donationRepository.query(`UPDATE donations
            SET status=false
            WHERE id=${donation.id}`);

            const logToAdd =  logRepository.create({
                user: "ADMIN",
                operacao: "DEL",
                tabela: "DOACOES",
                id_item: donation.id
            });
    
            await logRepository.save(logToAdd);

            return "Doação excluida com sucesso";
        }else{
            throw new Error('Nenhuma doação foi encontrada com esse ID!!!')
        }
    }
}

export {DeleteDonationByIdService};