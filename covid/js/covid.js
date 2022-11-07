let countrySelect = document.querySelector(".country-select");
let globalBox = document.querySelector(".global-container");
axios
  .get("https://covid-api.mmediagroup.fr/v1/cases")
  .then(function (response) {
    console.log(response);
    //  --------ვამატებთ სელექტში ქვეყნებს
    let countryArr = Object.keys(response.data);
    countryArr.forEach((element) => {
      let countryOption = document.createElement("option");
      countrySelect.appendChild(countryOption);
      countryOption.innerHTML = element;
    });
    //  --------ვქმნით ტექსტს global stats
    let globalTxt = Object.entries(response.data.Global.All);
    console.log(globalTxt);
    globalTxt.forEach((element) => {
      let globalText = document.createElement("p");
      globalBox.appendChild(globalText);
      globalText.innerHTML = element[0] + ":" + element[1];
    });
    //  -------------სტატისტიკის სორტირება ქვეყნების მიხედვით
    countrySelect.addEventListener("change", function () {});
  });
