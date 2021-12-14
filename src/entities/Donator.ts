import { Entity,PrimaryColumn,Column,CreateDateColumn,UpdateDateColumn } from "typeorm";

@Entity("donators")
export class Donator {

    @PrimaryColumn()
    readonly rg: number; 

    @Column()
    cep: number; 

    @Column()
    numero_residencia: number;

    @Column()
    nome: string;

    @Column()
    orgao_expeditor_rg: string;

    @Column()
    data_de_nascimento: Date;

    @Column()
    estado_civil: string;

    @Column()
    naturalidade: string;

    @Column()
    genero: string;

    @Column()
    profissao_id: number;

    @Column()
    grupo_sanguineo: string;

    @Column()
    rh_sanguineo: boolean;

    @Column()
    doador_de_medula: boolean;

    @Column()
    data_de_expedicao: Date;

    @Column()
    email: string;

    @Column()
    telefone1: string;

    @Column()
    telefone2: string;

    @Column()
    telefone3: string;

    @Column()
    status: boolean;

    @Column()
    filiacao_mae: string;

    @Column()
    filiacao_pai: string;

    @Column()
    estado: string;

    @Column()
    cidade: string;

    @Column()
    bairro: string;

    @Column()
    rua: string;

    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.status) {
            this.status = true;
        }
    }

}
