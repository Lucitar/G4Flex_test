import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateUser1636733611117 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'login',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar(150)',
          },
          {
            name: 'cpf',
            type: 'varchar(11)',
          },
          {
            name: 'email',
            type: 'varchar(100)',
          },
          {
            name: 'codigoAgente',
            type: 'varchar(6)',
          },
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user')
  }
}
