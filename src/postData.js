import getMovie from "./getMovie";
import getCountry from "./getCountry";
import getCurrency from "./getCurrency";

function postData() {
  const movieName = document.getElementById("movieName");
  const time = document.getElementById("time");
  const actors = document.getElementById("actors");
  const currency = document.getElementById("currency");
  const country = document.getElementById("country");
  const flag = document.getElementById("flag");
  const movieToSeach = document.getElementById("movieToSeach");

  flag.innerHTML = "";
  currency.innerText = "";
  actors.innerText = "";

  if (movieToSeach.value.trim() == "") {
    alert("Empty input");
  } else {
    getMovie(movieToSeach.value).then((movie) => {
      movieName.innerText = movie.Title;
      time.innerText = movie.Year;
      const nameArr = movie.Actors.split(", ")
        .map((fullName) => fullName.split(" "))
        .map((name) => name[0]);

      nameArr.forEach((name) => (actors.innerText += name + ", "));

      const countryArr = movie.Country.split(", ").map((countryName) =>
        countryName.trim()
      );

      if (countryArr.length > 0) {
        country.innerText = countryArr.reduce(
          (acc, cur) => acc + cur + ", ",
          ""
        );
        countryArr.forEach((countryName) =>
          getCountry(countryName).then(
            (name) => (flag.innerHTML += `<img src = "${name.flags.png}">`)
          )
        );

        countryArr.forEach((countryName) =>
          getCurrency(countryName).then(
            (currencyName) => (currency.innerText += currencyName + ", ")
          )
        );
      }
    });
  }
}

export default postData;
