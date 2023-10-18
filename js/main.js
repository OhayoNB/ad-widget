'use strict'

async function getAds() {
  try {
    const res = await fetch(
      'http://api.taboola.com/1.0/json/taboola-templates/recommendations.get?publisher id=taboola-templates&app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&source.id=141411111&count=10&source.type=photo',
      {
        method: 'GET',
      }
    )
    const data = await res.json()
    console.log(data)
    return data.list
  } catch (err) {
    console.error(err)
  }
}

async function renderAds() {
  const ads = await getAds()

  const strHTML = ads.map((ad) => {
    console.log(ad)
    return `
          <div class="content" onClick="openAd('${ad.url}')">
          <div class="media">
              <img src="${ad.thumbnail[0].url}" alt="ad image" />
          </div>
          <div class="text">
                <p>${ad.branding}</p>
              <span>${ad.name}</span>
          </div>
          <div class="action-tray">
          <div class="footer-start">
          <div class="ad-label">
          <a href="${ad.url}" class="ad-label-text">Ad</a>
          </div>
          </div>
          </div>
          </div>
          `
  })

  document.querySelector('.ads-list').innerHTML = strHTML.join('')
}

function openAd(url) {
  window.open(url, '_blank')
}

renderAds()
