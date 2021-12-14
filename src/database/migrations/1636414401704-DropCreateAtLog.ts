import {MigrationInterface, QueryRunner} from "typeorm";

export class DropCreateAtLog1636414401704 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("log","created_at")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
