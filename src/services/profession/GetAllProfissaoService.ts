import { getCustomRepository } from 'typeorm';
import { ProfissaoRepositorie } from '../../repositories/ProfissaoRepositorie';

class GetAllProfissaoService {
    
    async getAll() {
        const profissaoRepository = getCustomRepository(ProfissaoRepositorie);

        const profissaoList = await profissaoRepository.find();

        return profissaoList;
    }
    
}

export { GetAllProfissaoService };