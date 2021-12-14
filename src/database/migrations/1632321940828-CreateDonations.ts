import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDonations1632321940828 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "donations",
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
                        name: "doador_rg",
                        type: "double",
                        isNullable:false
                    },
                    {
                        name: "volume",
                        type: "double",
                        isNullable:false
                    },
                    {
                        name: "data",
                        type: "date",
                        isNullable:false
                    },
                    {
                        name: "orgao_coletor_id",
                        type: "double",
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
                        name: "FK_doador_rg",
                        referencedTableName: "donators",
                        referencedColumnNames: ["rg"],
                        columnNames: ["doador_rg"],
                        onDelete: "RESTRICT",
                        onUpdate: "CASCADE"
                    },
                    {
                        name: "FK_unidade_coletora_id",
                        referencedTableName: "unidadecoletora",
                        referencedColumnNames: ["id"],
                        columnNames: ["orgao_coletor_id"],
                        onDelete: "RESTRICT",
                        onUpdate: "CASCADE"
                    }

                ]

            })
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("donations");
    }

}
