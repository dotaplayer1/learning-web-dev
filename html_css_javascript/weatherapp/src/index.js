import './scss/styles.scss'
import * as bootstrap from 'bootstrap'

async function getWeatherData(location) {
  const fetchedData = await fetch(`https://api.weatherapi.com/v1/current.json?key=099a9c0ffda84a2ba86110316231204&q=${location}`)
  const responseJson = await fetchedData.json();
  console.log(responseJson);
}

getWeatherData("vancouver");