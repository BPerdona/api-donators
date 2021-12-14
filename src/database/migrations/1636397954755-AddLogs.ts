import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class AddLogs1636397954755 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "log",
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
                        name: "user",
                        type: "varchar",
                        isNullable:false,
                        isUnique:true
                    },
                    {
                        name:"operacao",
                        type: "varchar",
                        isNullable:false,
                    },
                    {
                        name:"tabela",
                        type: "varchar",
                        isNullable:false
                    },
                    {
                        name:"id_item",
                        type:"integer",
                        isNullable:false
                    },
                    {
                        name: "data",
                        type: "timestamp",
                        default: "now()",
                        isNullable:false
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                        isNullable:false
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("log");
    }

}
