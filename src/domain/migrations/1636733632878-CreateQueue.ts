import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateQueue1636733632878 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'queue',
        columns: [
          {
            name: 'name',
            isPrimary: true,
            type: 'varchar(150)',
          },
          {
            name: 'timeout',
            type: 'int',
          },
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('queue')
  }
}
