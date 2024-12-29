import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Track from './track.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Artist extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nickname: string

  @column()
  declare image: string | null

  @hasMany(() => Track)
  declare tracks: HasMany<typeof Track>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}
