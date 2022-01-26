import getMovie from "./getMovie";

function getLength() {
  const lengthOfMovie1 = document.getElementById("lengthOfMovie1");
  const lengthOfMovie2 = document.getElementById("lengthOfMovie2");
  const lengthOfMovie3 = document.getElementById("lengthOfMovie3");
  const populationDiv = document.getElementById("populationDiv");

  const value1 = lengthOfMovie1.value;
  const value2 = lengthOfMovie2.value;
  const value3 = lengthOfMovie3.value;

  const runtime1 = getMovie(value1).then((x) =>
    Number(x.Runtime.split(" ")[0])
  );
  const runtime2 = getMovie(value2).then((x) =>
    Number(x.Runtime.split(" ")[0])
  );
  const runtime3 = getMovie(value3).then((x) =>
    Number(x.Runtime.split(" ")[0])
  );

  Promise.all([runtime1, runtime2, runtime3]).then((values) => {
    return (populationDiv.innerText = values.reduce(
      (acc, cur) => acc + cur,
      0
    ));
  });
}

export default getLength;
