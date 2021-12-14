import { getCustomRepository } from 'typeorm';
import { DonationRespositories } from '../../repositories/DonationRespositories';
import { LogRepositorie } from '../../repositories/LogRepositorie';
import { Request } from 'express';

class UpdateDonationByIdService{

    async updateDonator(id: number, req: Request){
        const donationRepository = getCustomRepository(DonationRespositories);
        const logRepository = getCustomRepository(LogRepositorie);

        const donationToUpdate = await donationRepository.findOne({id});

        if(donationToUpdate){

            donationRepository.update(donationToUpdate.id,{
                doador_rg: req.body.doador_rg,
                volume: req.body.volume,
                data: req.body.data,
                orgao_coletor_id: req.body.orgao_coletor_id,
                status: req.body.status
            })

            const logToAdd =  logRepository.create({
                user: "ADMIN",
                operacao: "UPD",
                tabela: "DOACOES",
                id_item: donationToUpdate.id
            });
    
            await logRepository.save(logToAdd);

            return donationRepository.findOne({id});
        }else{
            throw new Error('Nenhum doador encontrado com esse ID!!!');
        }
    }
}

export { UpdateDonationByIdService };