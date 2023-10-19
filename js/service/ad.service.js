export const adService = {
  getAds,
}

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
