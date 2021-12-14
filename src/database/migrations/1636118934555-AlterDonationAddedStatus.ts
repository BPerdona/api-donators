import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterDonationAddedStatus1636118934555 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "donations",
            new TableColumn({
                name: "status",
                type: "boolean",
                default: true
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("donations","status")
    }

}
