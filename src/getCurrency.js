async function getCurrency(countryName) {
  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    );
    const country = await res.json();
    const objectKey = Object.keys(country[0].currencies)[0];
    console.log(country[0].currencies[objectKey].name);

    return country[0].currencies[objectKey].name;
  } catch (er) {
    console.log("wronng");
  }
}

export default getCurrency;
