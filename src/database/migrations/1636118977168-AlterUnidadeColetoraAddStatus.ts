import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterUnidadeColetoraAddStatus1636118977168 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "unidadecoletora",
            new TableColumn({
                name: "status",
                type: "boolean",
                default: true
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("unidadecoletora","status")
    }
}
