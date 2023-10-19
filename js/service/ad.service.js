export const adService = {
  getAds,
}

const API_KEY = 'f9040ab1b9c802857aa783c469d0e0ff7e7366e4'

async function getAds() {
  try {
    const res = await fetch(
      `http://api.taboola.com/1.0/json/taboola-templates/recommendations.get?publisher id=taboola-templates&app.type=desktop&app.apikey=${API_KEY}&source.id=141411111&count=10&source.type=photo`,
      {
        method: 'GET',
      }
    )
    if (!res.ok) throw new Error('Failed to fetch ads. Please try again later.')

    const data = await res.json()
    return data.list
  } catch (err) {
    console.error(err.message)

    const errorMessageEl = document.querySelector('.error-message')
    if (errorMessageEl) errorMessageEl.innerText = err.message
  }
}
