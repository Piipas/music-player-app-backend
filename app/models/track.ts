import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Artist from './artist.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Track extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare image: string

  @column()
  declare file: string

  @column()
  declare duration: number

  @column()
  declare artistId: number

  @belongsTo(() => Artist)
  declare artist: BelongsTo<typeof Artist>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
