import { renderAds } from '../js/app.controller.js'

QUnit.config.autostart = false
QUnit.module('app.controller tests', function () {
  QUnit.test('renderAds function', function (assert) {
    const testAds = [
      { id: 1, title: 'Ad 1' },
      { id: 2, title: 'Ad 2' },
      { id: 3, title: 'Ad 3' },
      { id: 4, title: 'Ad 4' },
      { id: 5, title: 'Ad 5' },
      { id: 6, title: 'Ad 6' },
      { id: 7, title: 'Ad 7' },
      { id: 8, title: 'Ad 8' },
      { id: 9, title: 'Ad 9' },
      { id: 10, title: 'Ad 10' },
    ]
    renderAds(testAds)

    assert.equal(
      document.querySelectorAll('.content').length,
      10,
      'Ten ads has been render to the page'
    )

    renderAds([])
    assert.equal(
      document.querySelectorAll('.content').length,
      0,
      'No ads render when given an empty list'
    )
  })
})
