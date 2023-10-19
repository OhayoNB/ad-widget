import { adService } from '../js/service/ad.service.js'

QUnit.config.autostart = false
QUnit.module('ad.service tests', function () {
  QUnit.test('getAds function test', function (assert) {
    const done = assert.async()

    adService
      .getAds()
      .then((ads) => {
        assert.ok(ads.length > 0, 'Received ads from the API')
        done()
      })
      .catch((error) => {
        assert.ok(false, `Error fetching ads: ${error}`)
        done()
      })
  })
})
