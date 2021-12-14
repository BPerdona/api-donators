import { getCustomRepository } from 'typeorm';
import { ProfissaoRepositorie } from '../../repositories/ProfissaoRepositorie';
import { LogRepositorie } from '../../repositories/LogRepositorie';

type ProfissaoRequest = {
   nome: string;
}

class CreateProfissaoService {
    async execute({ nome }: ProfissaoRequest){
        const profissaoRepositorie = getCustomRepository(ProfissaoRepositorie);
        const logRepository = getCustomRepository(LogRepositorie);

        const profissaoExiste = await profissaoRepositorie.findOne({nome});

        if(profissaoExiste != undefined){
            throw new Error('A profissao ja existe');
        }
        
        const profissao = profissaoRepositorie.create({
           nome
        })

        await profissaoRepositorie.save(profissao);

        const logToAdd =  logRepository.create({
            user: "ADMIN",
            operacao: "INS",
            tabela: "PROFISSAO",
            id_item: profissao.id
        });

        await logRepository.save(logToAdd);

        return profissao;
    }
}

export { CreateProfissaoService }