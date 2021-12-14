import { Entity,Column,CreateDateColumn,UpdateDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("donations")
export class Donation {
    
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column() 
    doador_rg: number;

    @Column()
    volume: number;

    @Column()
    data: Date;

    @Column()
    orgao_coletor_id: number;

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
