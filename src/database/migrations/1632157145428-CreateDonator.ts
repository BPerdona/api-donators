import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDonator1632157145428 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "donators",
                columns:[
                    {
                        name: "rg",
                        type: "double",
                        isNullable:false,
                        isPrimary: true,
                        isUnique:true
                    },
                    {
                        name: "cep",
                        type: "double",
                        isNullable:false
                    },
                    {
                        name: "numero_residencia",
                        type: "double",
                        isNullable:false
                    },
                    {
                        name: "nome",
                        type: "varchar",
                        isNullable:false
                    },
                    {
                        name: "orgao_expeditor_rg",
                        type: "varchar",
                        isNullable:false
                    },
                    {
                        name: "data_de_expedicao",
                        type: "date",
                        isNullable:false
                    },
                    {
                        name: "data_de_nascimento",
                        type: "date",
                        isNullable:false
                    },
                    {
                        name: "estado_civil",
                        type: "varchar",
                        isNullable:false
                    },
                    {
                        name: "naturalidade",
                        type: "varchar",
                        isNullable:false
                    },
                    {
                        name: "genero",
                        type: "varchar",
                        isNullable:false
                    },
                    {
                        name: "profissao_id",
                        type: "double",
                        isNullable:false
                    },
                    {
                        name: "grupo_sanguineo",
                        type: "varchar",
                        isNullable:false
                    },
                    {
                        name: "rh_sanguineo",
                        type: "boolean",
                        isNullable:false
                    },
                    {
                        name: "doador_de_medula",
                        type: "boolean",
                        isNullable:false
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isNullable:false
                    },
                    {
                        name: "telefone1",
                        type: "varchar",
                        isNullable:false
                    },
                    {
                        name: "telefone2",
                        type: "varchar",
                        isNullable:true
                    },
                    {
                        name: "telefone3",
                        type: "varchar",
                        isNullable:true
                    },
                    {
                        name:"status",
                        type: "boolean",
                        isNullable:false
                    },
                    {
                        name:"filiacao_mae",
                        type: "varchar",
                        isNullable:true
                    }, 
                    {
                        name:"filiacao_pai",
                        type: "varchar",
                        isNullable:true
                    },
                    {
                        name:"cidade",
                        type: "varchar",
                        isNullable:false
                    },
                    {
                        name:"estado",
                        type: "varchar",
                        isNullable:false
                    },
                    {
                        name:"bairro",
                        type: "varchar",
                        isNullable:false
                    },
                    {
                        name:"rua",
                        type: "varchar",
                        isNullable:false
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                        isNullable:false
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                        isNullable:false
                    }
            ],
                foreignKeys: [
                    {
                        name: "FK_doador_profissao",
                        referencedTableName: "profissao",
                        referencedColumnNames: ["id"],
                        columnNames: ["profissao_id"],
                        onDelete: "RESTRICT",
                        onUpdate: "CASCADE"
                    }
                ]
                
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("donators");
    }

}
