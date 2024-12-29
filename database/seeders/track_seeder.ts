import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Track from '#models/track'

export default class UserSeeder extends BaseSeeder {
  async run() {
    await Track.createMany([
      {
        title: 'Which type of bitch are you?',
        duration: 123456,
        artistId: 1,
        file: 'tracks/wich_type_of_bitch_are_you.mp3',
      },
      {
        title: 'Stop talking!',
        duration: 123456,
        artistId: 2,
        file: 'tracks/stop_talking.mp3',
      },
    ])
  }
}
