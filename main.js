//Menu Section

document.querySelector("#open-nav-menu").addEventListener("click", function () {
  document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document
  .querySelector("#close-nav-menu")
  .addEventListener("click", function () {
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
  });

//Greeting Section

function celciusToFahr(temperature) {
  let fahr = temperature * (9 / 5) + 32;
  return fahr;
}

let temperature = 49;
// alert(`The temperature outside is ${celciusToFahr(temperature)}`);

const greetingText = "Good morning!";
const weatherCondition = "cloudy";
const userLocation = "Kolkata";

let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(
  1
)}°C outside.`;

let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celciusToFahr(
  temperature
).toFixed(1)}°F outside.`;

document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = celsiusText;

document
  .querySelector(".weather-group")
  .addEventListener("click", function (e) {
    if (e.target.id == "celsius") {
      document.querySelector("p#weather").innerHTML = celsiusText;
    } else if (e.target.id == "fahr") {
      document.querySelector("p#weather").innerHTML = fahrText;
    }
  });
