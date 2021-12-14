import { getCustomRepository } from 'typeorm';
import { DonatorRespositorie } from '../../repositories/DonatorRespositorie';
import { LogRepositorie } from '../../repositories/LogRepositorie';
import { Request } from 'express';

class UpdateDonatorByRgService {
    
    async updateDonator(rg: number, req: Request) {
        const donatorRepository = getCustomRepository(DonatorRespositorie);
        const logRepository = getCustomRepository(LogRepositorie);

        const donatorToUpdate = await donatorRepository.findOne({ rg });

        if(donatorToUpdate) {

            donatorRepository.update(donatorToUpdate.rg,{
                nome: req.body.nome,
                rg: req.body.rg,
                orgao_expeditor_rg: req.body.orgao_expeditor_rg,
                data_de_nascimento: req.body.data_de_nascimento,
                estado_civil: req.body.estado_civil,
                naturalidade: req.body.naturalidade,
                genero: req.body.genero,
                profissao_id: req.body.profissao_id,
                grupo_sanguineo: req.body.grupo_sanguineo,
                rh_sanguineo: req.body.rh_sanguineo,
                doador_de_medula: req.body.doador_de_medula,
                data_de_expedicao: req.body.data_de_expedicao,
                email: req.body.email,
                telefone1: req.body.telefone1,
                telefone2: req.body.telefone2,
                telefone3: req.body.telefone3,
                status: req.body.status,
                cep: req.body.cep,
                numero_residencia: req.body.numero_residencia,
                filiacao_mae: req.body.filiacao_mae,
                filiacao_pai: req.body.filiacao_pai,
                estado: req.body.estado,
                cidade: req.body.cidade,
                bairro: req.body.bairro,
                rua: req.body.rua
            })

            const logToAdd =  logRepository.create({
                user: "ADMIN",
                operacao: "UPD",
                tabela: "DOADORES",
                id_item: donatorToUpdate.rg
            });
    
            await logRepository.save(logToAdd);
          
            return donatorRepository.findOne({rg}) ;
        } else {
            throw new Error('Nenhum doador encontrado com esse RG!!!');
        }

    }
    
}

export { UpdateDonatorByRgService };