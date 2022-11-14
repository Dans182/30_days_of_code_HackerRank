"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  //First solution
  // const arrReversed = arr.reverse();
  // const convertedToString = String(arrReversed);
  // const stringFinal = convertedToString.replaceAll(",", " ");
  // console.log(stringFinal);

  //Second solution
  const arrReversed = arr.reverse();
  let newArray = [];
  for (let i = 0; i < arrReversed.length; ++i) {
    newArray[i] = arrReversed[i];
    //console.log(newArray)
  }
  console.log(newArray.join(" "));
}
