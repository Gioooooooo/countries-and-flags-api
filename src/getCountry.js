async function getCountry(countryName) {
  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    );
    const country = await res.json();
    return country[0];
  } catch (er) {
    console.log("wronng");
  }
}

export default getCountry;
