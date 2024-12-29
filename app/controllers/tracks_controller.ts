import Track from '#models/track'
import type { HttpContext } from '@adonisjs/core/http'

export default class TracksController {
  public async tracks({ response }: HttpContext) {
    const tracks = await Track.query().preload('artist')
    response.json(tracks)
  }
}
