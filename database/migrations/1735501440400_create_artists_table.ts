import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Artists extends BaseSchema {
  protected tableName = 'artists'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id') // Primary key
      table.string('nickname', 255).notNullable()
      table.string('image', 255).nullable()
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
