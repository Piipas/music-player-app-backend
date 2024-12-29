/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('tracks', '#controllers/tracks_controller.tracks')
router.get('artists', '#controllers/artists_controller.artists')
