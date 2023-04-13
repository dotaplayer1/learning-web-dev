import './scss/styles.scss'
import * as bootstrap from 'bootstrap'

const submitButton = document.querySelector('input[type="submit"]')
const locationInput = document.querySelector('#location');

async function getWeatherData(location) {
  const fetchedData = await fetch(`https://api.weatherapi.com/v1/current.json?key=099a9c0ffda84a2ba86110316231204&q=${location}`)
  const responseJson = await fetchedData.json();
  const parsedData = parseResponse(responseJson);
  displayData(parsedData);
  console.log(responseJson);
}

submitButton.addEventListener("click", (event) => {
  getWeatherData(locationInput.value);
  locationInput.value = "";
  event.preventDefault();
})

function parseResponse(response) {
  let data = [];
  data.push(`city: ${response.location.name}`)
  data.push(`weather: ${response.current.condition.text}`);
  data.push(`temperature (C): ${response.current.temp_c}`);
  data.push(`temperature (F): ${response.current.temp_f}`);
  return data;
}

function displayData(data) {
  const root = document.querySelector("#root")
  data.forEach(element => {
    const div = document.createElement("div");
    div.classList.add("lead");
    div.textContent = element;
    root.appendChild(div)
  })
}