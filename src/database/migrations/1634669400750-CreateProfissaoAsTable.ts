import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProfissaoAsTable1634669400750 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "profissao",
                columns: [
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
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("profissao");
    }

}
