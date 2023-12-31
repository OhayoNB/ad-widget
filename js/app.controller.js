import { adService } from './service/ad.service.js'

// Function to render ads on the page
export async function renderAds() {
  try {
    // Get ads from the service
    const ads = await adService.getAds()

    // Loop over the ads and generate HTML string from each ad
    const strHTML = ads.map((ad) => {
      const altText = ad.thumbnail[0].url
        ? `${ad.branding || ad.name || 'Advertisement'} - Click to view`
        : 'Image not available'
      return `
      <div class="content" data-url="${ad.url}">
        <div class="media">
          <img src="${ad.thumbnail[0].url}"
          alt="${altText}"
          onerror="this.onerror=null; this.src='../assets/img_not_available.png'" />
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

    // Insert the HTML into the ads list container
    document.querySelector('.ads-list').innerHTML = strHTML.join('')

    // Add click event listener to each ad
    document.querySelectorAll('.content').forEach((adElement) => {
      adElement.addEventListener('click', () =>
        openAd(adElement.getAttribute('data-url'))
      )
    })
  } catch (err) {
    // Log error to console
    console.error(err.message)
  }
}

function openAd(url) {
  window.open(url, '_blank')
}

// Function to start QUnit tests
function startQUnitTests() {
  const qunitDiv = document.getElementById('qunit')
  qunitDiv.style.display = 'block'
  QUnit.start()
}

// Expose the startQUnitTests function to start the tests from the console
window.startQUnitTests = startQUnitTests

// Call the renderAds function when the page loads
renderAds()
