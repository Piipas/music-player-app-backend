import Artist from '#models/artist'
import type { HttpContext } from '@adonisjs/core/http'

export default class TracksController {
  public async artists({ response }: HttpContext) {
    const artists = await Artist.query().preload('tracks')
    response.json(artists)
  }
}
