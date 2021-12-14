import { getCustomRepository } from 'typeorm';
import { CollectorRepositorie } from '../../repositories/CollectorRepositorie';
import { LogRepositorie } from '../../repositories/LogRepositorie';

type CollectorRequest = {
    nome: string;
    telefone: string;
    cidade: string;
}

class CreateCollectorService {
    
    async execute({nome,telefone,cidade} : CollectorRequest) {
        const collectorRepository = getCustomRepository(CollectorRepositorie);
        const logRepository = getCustomRepository(LogRepositorie);

        const collectorAlreadyExists = await collectorRepository.findOne({ nome });

        if(collectorAlreadyExists !== undefined) 
            throw new Error('Unidade coletora ja cadastrada!!!');

        const collector = collectorRepository.create({
            nome,
            telefone,
            cidade
        });

        await collectorRepository.save(collector);

        const logToAdd =  logRepository.create({
            user: "ADMIN",
            operacao: "INS",
            tabela: "UNIDADECOLETORA",
            id_item: collector.id
        });

        await logRepository.save(logToAdd);

        return collector;
    }
    
}

export { CreateCollectorService };