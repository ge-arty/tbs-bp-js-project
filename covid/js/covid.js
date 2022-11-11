let countrySelect = document.querySelector(".country-select");
let globalBox = document.querySelector(".global-container");
let infoContainer = document.querySelector(".info-container");
let moreInfoContainer = document.querySelector(".more-info-container");
let btnMore = document.querySelector(".more");
let btnLess = document.querySelector(".less");
let countryFirstOption = document.querySelector("#choose");
btnMore.style.display = "none";
btnLess.style.display = "none";

axios
  .get("https://covid-api.mmediagroup.fr/v1/cases")
  .then(function (response) {
    let infoArray = Object.entries(response.data);
    //  --------ვამატებთ სელექტში ქვეყნებს
    let countryArr = Object.keys(response.data);
    countryArr.forEach((element) => {
      let countryOption = document.createElement("option");
      countrySelect.appendChild(countryOption);
      countryOption.value = element;
      countryOption.innerHTML = element;
    });
    //  --------ვქმნით ტექსტს global stats
    let globalTxt = Object.entries(response.data.Global.All);
    globalTxt.forEach((element) => {
      let globalText = document.createElement("p");
      globalBox.appendChild(globalText);
      globalText.innerHTML = element[0] + ":" + element[1];
    });
    //  -------------სტატისტიკის სორტირება ქვეყნების მიხედვით

    countrySelect.addEventListener("change", function () {
      let chooseOption = document.getElementById("#choose");
      if (countrySelect.value == countryFirstOption.value) {
        btnMore.style.display = "none";
        globalBox.style.display = "block";
      }
      infoContainer.innerHTML = "";
      moreInfoContainer.innerHTML = "";
      function generate(countryInfo) {
        for (let i = 0; i < countryInfo.length; i++) {
          let infectionRate = Math.ceil(
            (countryInfo[i][1].All.confirmed * 100) /
              countryInfo[i][1].All.population
          );
          let deathrate = Math.ceil(
            (countryInfo[i][1].All.deaths * 100) /
              countryInfo[i][1].All.confirmed
          );
          if (countryInfo[i][0] == countrySelect.value) {
            let locationText = document.createElement("p");
            let updatedText = document.createElement("p");
            let confirmedText = document.createElement("p");
            let populationText = document.createElement("p");
            let deathsText = document.createElement("p");
            let lifeexpectancyText = document.createElement("p");
            let infectionRateText = document.createElement("p");
            let deathrateText = document.createElement("p");
            infoContainer.appendChild(locationText);
            infoContainer.appendChild(updatedText);
            infoContainer.appendChild(confirmedText);
            infoContainer.appendChild(populationText);
            moreInfoContainer.appendChild(deathsText);
            moreInfoContainer.appendChild(lifeexpectancyText);
            moreInfoContainer.appendChild(infectionRateText);
            moreInfoContainer.appendChild(deathrateText);
            locationText.innerHTML =
              "location:" + countryInfo[i][1].All.location;
            updatedText.innerHTML = "updated:" + countryInfo[i][1].All.updated;
            confirmedText.innerHTML =
              "confirmed:" + countryInfo[i][1].All.confirmed;
            populationText.innerHTML =
              "population:" + countryInfo[i][1].All.population;
            deathsText.innerHTML = "deaths:" + countryInfo[i][1].All.deaths;
            lifeexpectancyText.innerHTML =
              "lifeexpectancy:" + countryInfo[i][1].All.life_expectancy;
            infectionRateText.innerHTML =
              "Infection-rate:" + infectionRate + "%";
            deathrateText.innerHTML = "deathrate:" + deathrate + "%";
            moreInfoContainer.style.display = "none";
            btnMore.style.display = "block";
            globalBox.style.display = "none";
          }
        }
      }
      generate(infoArray);
    });
    // -------ღილაკების ფუნქციები
    btnMore.addEventListener("click", function () {
      moreInfoContainer.style.display = "flex";
      btnMore.style.display = "none";
      btnLess.style.display = "block";
    });
    btnLess.addEventListener("click", function () {
      moreInfoContainer.style.display = "none";
      btnMore.style.display = "block";
      btnLess.style.display = "none";
    });
  });
