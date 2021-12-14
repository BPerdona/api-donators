import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";

@Entity("admin")
export class Admin {
   
    @PrimaryGeneratedColumn()
    readonly id: string;   

    @Column()
    nome: string;

    @Column()
    password: string;

}
