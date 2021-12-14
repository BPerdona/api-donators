import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrgaoColetor1632321981402 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "unidadecoletora",
                columns:[
                    {
                        name: "id",
                        type: "double",
                        isPrimary: true,
                        isNullable:false,
                        isUnique:true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "nome",
                        type: "varchar",
                        isNullable:false,
                        isUnique:true
                    },
                    {
                        name: "telefone",
                        type: "varchar",
                        isNullable:true
                    },
                    {
                        name: "cidade",
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
            ]
            })
        );
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("unidadecoletora");
    }
}
