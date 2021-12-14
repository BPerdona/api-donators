import { getCustomRepository } from 'typeorm';
import { DonationRespositories } from '../../repositories/DonationRespositories';
import { LogRepositorie } from '../../repositories/LogRepositorie';

type DonationRequest ={
    doador_rg: number,
    volume: number,
    data: Date;
    orgao_coletor_id: number
}

class CreateDonationService {
    async execute({doador_rg, volume, data, orgao_coletor_id}: DonationRequest){
        const donationRespositories = getCustomRepository(DonationRespositories);
        const logRepository = getCustomRepository(LogRepositorie);
        
        const donation = donationRespositories.create({
            doador_rg,
            volume,
            data,
            orgao_coletor_id
        })

        await donationRespositories.save(donation);

        const logToAdd =  logRepository.create({
            user: "ADMIN",
            operacao: "INS",
            tabela: "DOACOES",
            id_item: donation.id
        });

        await logRepository.save(logToAdd);

        return donation;
    }
}

export { CreateDonationService }