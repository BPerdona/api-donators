import { getCustomRepository } from 'typeorm';
import { Request } from 'express';
import { CollectorRepositorie } from '../../repositories/CollectorRepositorie';
import { LogRepositorie } from '../../repositories/LogRepositorie';

class UpdateCollectorByIdService {
    
    async update(id: number, req: Request) {
        const collectorRepository = getCustomRepository(CollectorRepositorie);
        const logRepository = getCustomRepository(LogRepositorie);

        const collectorToUpdate = await collectorRepository.findOne({ id });

        if(collectorToUpdate) {

            collectorRepository.update(collectorToUpdate.id,{
                nome: req.body.nome,
                telefone: req.body.telefone,
                cidade: req.body.cidade,
                status: req.body.status
            })

            const logToAdd =  logRepository.create({
                user: "ADMIN",
                operacao: "UPD",
                tabela: "UNIDADECOLETORA",
                id_item: collectorToUpdate.id
            });
    
            await logRepository.save(logToAdd);
          
            return collectorRepository.findOne({id}) ;
        } else {
            throw new Error('Nenhuma unidade coletora encontrada com esse ID!!!');
        }

    }
    
}

export { UpdateCollectorByIdService };