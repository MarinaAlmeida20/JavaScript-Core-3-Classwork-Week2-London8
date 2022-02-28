// This function should retrieve the JSON from the `countryURL` and then call onCountryDataReceived() with the JSON

function getData(countryURL) {
  fetch(countryURL)
    .then((response) => response.json())
    .then((data) => onCountryDataReceived(data))
    .catch((error) => console.error(error));
}

function onCountryDataReceived(country) {
  addCountryName(country);
  addCountryCapital(country);
  addNameInOtherLanguages(country);
}

// This function should take the JSON for the country and put a H1 tag on the screen containing its name
function addCountryName(countryData) {
  // console.log(countryData);
  let countryName = countryData[0].name.common;
  // console.log(countryName);
  let countryNameHeading = document.createElement("h1");
  // console.log(countryNameHeading);
  countryNameHeading.innerText = countryName;
  getContentDiv().append(countryNameHeading);
}

// This function should take the JSON for the country and put a H2 tag on the screen containing its capital city
function addCountryCapital(countryData) {
  // console.log(countryData);
  let capitalName = countryData[0].capital;
  // console.log(capitalName);
  const capitalNameHeading = document.createElement("h2");
  capitalNameHeading.innerText = capitalName;
  getContentDiv().append(capitalNameHeading);
}

// This function should take the JSON for the country and put UL and LI tags on the screen with the countries name translated into other languages
function addNameInOtherLanguages(countryData) {
  console.log(countryData[0].translations);
  const ul = document.createElement("ul");
  ul.setAttribute("id", "list");

  let nameInOtherLanguages = countryData[0].translations;

  getContentDiv().appendChild(ul);

  Object.keys(nameInOtherLanguages).forEach((element) => {
    const otherLanguages = `Tranlation: ${element}, ${nameInOtherLanguages[element].common}`;
    let li = document.createElement("li");
    li.innerHTML += otherLanguages;
    ul.appendChild(li);
  });
}

function getContentDiv() {
  return document.querySelector("#content");
}

function onLoad() {
  getData("https://restcountries.com/v3.1/name/Great%20Britain");

  getData("https://restcountries.com/v3.1/name/France");

  getData("https://restcountries.com/v3.1/name/Germany");

  getData("https://restcountries.com/v3.1/name/Spain");

  getData("https://restcountries.com/v3.1/name/Portugal");

  getData("https://restcountries.com/v3.1/name/Hungary");

  getData("https://restcountries.com/v3.1/name/Russia");
}

window.onload = onLoad;
