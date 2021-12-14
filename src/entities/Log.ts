import { Entity,PrimaryGeneratedColumn,Column,CreateDateColumn } from "typeorm";

@Entity("log")
export class Log {

    @PrimaryGeneratedColumn()
    readonly id: number;   

    @Column()
    user: string;

    @Column()
    operacao: string;

    @Column()
    tabela: string;

    @Column()
    id_item: number;

    @CreateDateColumn()
    data: Date;

}

