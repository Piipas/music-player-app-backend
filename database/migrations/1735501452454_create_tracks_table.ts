import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Tracks extends BaseSchema {
  protected tableName = 'tracks'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id') // Primary key
      table.string('title', 255).notNullable()
      table.string('image', 255).nullable()
      table.string('file', 255).notNullable()
      table.integer('duration').notNullable()
      table.integer('artist_id').unsigned().references('id').inTable('artists').onDelete('CASCADE') // Delete track if artist is deleted
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
