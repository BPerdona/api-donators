import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Admin1632500137749 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "admin",
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
                        isUnique:true,
                        isNullable:false
                    },
                    {
                        name: "password",
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
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("admin");
    }

}
