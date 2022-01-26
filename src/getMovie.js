async function getMovie(title) {
  try {
    const res = await fetch(
      `http://www.omdbapi.com/?t=${title}&apikey=5afe1a5d`
    );
    const movie = await res.json();
    return movie;
  } catch (err) {
    console.error(err);
  }
}

export default getMovie;
