import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";

@Entity("profissao")
export class Profissao {

    @PrimaryGeneratedColumn()
    readonly id: number;   

    @Column()
    nome: string;

}

