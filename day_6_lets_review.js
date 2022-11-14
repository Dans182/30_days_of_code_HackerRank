function processData(input) {
  //Enter your code here
  let wordsWithoutSpaces = input.split("\n");
  for (let i = 1; i < wordsWithoutSpaces.length; i = i + 1) {
    let eachWord = wordsWithoutSpaces[i];
    let odd = "";
    let even = "";
    for (let j = 0; j < eachWord.length; j = j + 1) {
      if (j % 2 == 0) {
        even += eachWord[j];
      } else {
        odd = odd + eachWord[j];
      }
    }
    console.log(even + " " + odd);
  }
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
