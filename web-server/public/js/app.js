// fetch("https:/puzzle.mead.io/puzzle")
//   .then((response) => response.json())
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.error("Failed retrieving information", err);
//   });

/*****************/
const wheaterForm = document.querySelector(".inputLocale");
const btnSearch = document.querySelector(".search");
const weatherPar = document.querySelector(".weather");
const cityPar = document.querySelector(".city");

function gettingAddress(addres) {
  fetch(`/weather?address=${addres}`)
    .then((response) => response.json())
    .then((data) => {
      cityPar.innerHTML = "";
      weatherPar.innerHTML = "";
      if (data.e || data.error) {
        cityPar.innerHTML = `<b>ERROR:</b> ${Object.values(data)[0]}`;
      } else {
        cityPar.innerHTML = `${data.location}`;
        weatherPar.innerHTML = `${data.weather}`;
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

btnSearch.addEventListener("click", (e) => {
  const address = wheaterForm.value;
  e.preventDefault();
  cityPar.innerHTML = "";
  weatherPar.innerHTML = `Loading data forecast.`;
  gettingAddress(address);
});
