import { Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn } from "typeorm";

@Entity("unidadecoletora")
export class UnidadeColetora {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    nome: string; 

    @Column()
    telefone: string;

    @Column()
    cidade: string;

    @Column()
    status: boolean;

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
