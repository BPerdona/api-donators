import { getCustomRepository } from 'typeorm';
import { CollectorRepositorie } from '../../repositories/CollectorRepositorie';
import { LogRepositorie } from '../../repositories/LogRepositorie';

class DeleteCollectorByIdService {
    
    async delete(id: number) {
        const collectorRepository = getCustomRepository(CollectorRepositorie);
        const logRepository = getCustomRepository(LogRepositorie);

        const collector = await collectorRepository.findOne({ id });

        if(collector !== undefined) {
            const donatorTODelete = collectorRepository.query(`UPDATE unidadecoletora
            SET status=false
            WHERE id=${collector.id}`);

            const logToAdd =  logRepository.create({
                user: "ADMIN",
                operacao: "DEL",
                tabela: "UNIDADECOLETORA",
                id_item: collector.id
            });
    
            await logRepository.save(logToAdd);

            return "Orgão coletor excluido com sucesso";
        } else {
            throw new Error('Nenhuma unidade coletora encontrada com esse ID!!!');
        }

    }
    
}

export { DeleteCollectorByIdService };