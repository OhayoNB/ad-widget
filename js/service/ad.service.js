export const adService = {
  getAds,
}

const API_KEY = '<YOUR_API_KEY_HERE>'

// Function to fetch ads from the API
async function getAds() {
  try {
    // Make a GET request to the API
    const res = await fetch(
      `https://api.taboola.com/1.0/json/taboola-templates/recommendations.get?publisher id=taboola-templates&app.type=desktop&app.apikey=${API_KEY}&source.id=141411111&count=10&source.type=photo`,
      {
        method: 'GET',
      }
    )

    // Check if the response is successful
    if (!res.ok) throw new Error('Failed to fetch ads. Please try again later.')

    // Parse the JSON data from the response
    const data = await res.json()
    return data.list
  } catch (err) {
    // Log error to console
    console.error(err.message)

    // Display error message on the page
    const errorMessageEl = document.querySelector('.error-message')
    if (errorMessageEl)
      errorMessageEl.innerText =
        'Oops! Something went wrong. Please try again later.'
  }
}
