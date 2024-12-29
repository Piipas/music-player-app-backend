import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Artist from '#models/artist'

export default class UserSeeder extends BaseSeeder {
  async run() {
    await Artist.createMany([
      {
        nickname: 'Broken Heart',
      },
      {
        nickname: 'Girls Hater',
      },
    ])
  }
}
