import { getCustomRepository } from 'typeorm';
import { DonatorRespositorie } from '../../repositories/DonatorRespositorie';
import { LogRepositorie } from '../../repositories/LogRepositorie';

class DeleteDonatorByRgService {
    
    async deleteByRg(rg: number) {
        const donatorRepository = getCustomRepository(DonatorRespositorie);
        const logRepository = getCustomRepository(LogRepositorie);

        const donator = await donatorRepository.findOne({ rg });

        if(donator && donator.status !== false) {
            const donatorTODelete = donatorRepository.query(`UPDATE donators
                SET status=false
                WHERE rg=${rg}`);

                const logToAdd =  logRepository.create({
                    user: "ADMIN",
                    operacao: "DEL",
                    tabela: "DOADORES",
                    id_item: donator.rg
                });
        
                await logRepository.save(logToAdd);

            return donatorRepository.findOne({ rg });
        } else {
            throw new Error('Nenhum doador encontrado com esse RG!!!');
        }

    }
    
}

export { DeleteDonatorByRgService };