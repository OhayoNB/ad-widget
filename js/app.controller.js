'use strict'

import { adService } from './service/ad.service.js'

async function renderAds() {
  const ads = await adService.getAds()

  const strHTML = ads.map((ad) => {
    console.log(ad)
    return `
          <div class="content" data-url="${ad.url}">
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

  document.querySelectorAll('.content').forEach((adElement) => {
    adElement.addEventListener('click', () =>
      openAd(adElement.getAttribute('data-url'))
    )
  })
}

function openAd(url) {
  window.open(url, '_blank')
}

renderAds()
