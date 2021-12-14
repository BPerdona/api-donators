import { getCustomRepository } from 'typeorm';
import { DonatorRespositorie } from '../../repositories/DonatorRespositorie';
import { LogRepositorie } from '../../repositories/LogRepositorie';

type DonatorRequest = {
    nome: string;
    rg: number;
    orgao_expeditor_rg: string;
    data_de_nascimento: Date;
    estado_civil: string;
    naturalidade: string;
    genero: string;
    profissao_id: number;
    grupo_sanguineo: string;
    rh_sanguineo: boolean;
    doador_de_medula: boolean;
    data_de_expedicao: Date;
    email: string;
    telefone1: string;
    telefone2: string;
    telefone3: string;
    status: boolean;
    cep: number;
    numero_residencia:number;
    filiacao_mae: string;
    filiacao_pai: string;
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
}

class CreateDonatorService {
    
    async execute({nome, rg, orgao_expeditor_rg,data_de_nascimento,estado_civil,
        naturalidade,genero,profissao_id,grupo_sanguineo,rh_sanguineo,doador_de_medula,
        data_de_expedicao,email,telefone1,telefone2,telefone3,status,cep,numero_residencia,
        filiacao_mae,filiacao_pai,estado,cidade,bairro,rua} : DonatorRequest) {
        const donatorRepository = getCustomRepository(DonatorRespositorie);
        const logRepository = getCustomRepository(LogRepositorie);

        const donatorAlreadyExists = await donatorRepository.findOne({ rg });

        if(donatorAlreadyExists !== undefined && donatorAlreadyExists.status === true) 
            throw new Error('Doador ja cadastrado!!!');

        if(donatorAlreadyExists !== undefined && donatorAlreadyExists.status === false) 
            throw new Error('O cadastro precisa ser atualizado');

        const donator = donatorRepository.create({
            nome, 
            rg,
            orgao_expeditor_rg,
            data_de_nascimento,
            estado_civil,
            naturalidade,
            genero,
            profissao_id,
            grupo_sanguineo,
            rh_sanguineo,
            doador_de_medula,
            data_de_expedicao,
            email,
            telefone1,
            telefone2,
            telefone3,
            status,
            cep,
            numero_residencia,
            filiacao_mae,
            filiacao_pai,
            estado,
            cidade,
            bairro,
            rua
        });

        await donatorRepository.save(donator);

        const logToAdd =  logRepository.create({
            user: "ADMIN",
            operacao: "INS",
            tabela: "DOADORES",
            id_item: donator.rg
        });

        await logRepository.save(logToAdd);

        return donator;
    }
    
}

export { CreateDonatorService };