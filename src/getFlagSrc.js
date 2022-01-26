async function getFlagSrc(country) {
  try {
    const res =
      await fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true
      `);
    const result = await res.json();
    return result[0].flags.png;
  } catch (er) {
    console.log("sike");
  }
}
export default getFlagSrc;
