import postData from "./postData";
import getLength from "./getLength";

const searchMovie = document.getElementById("searchMovie");
const searchLengthOfMovie = document.getElementById("searchLengthOfMovie");

searchMovie.addEventListener("click", () => {
  postData();
});

searchLengthOfMovie.addEventListener("click", () => {
  getLength();
});
