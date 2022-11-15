/*
 * Complete the 'factorial' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function factorial(n) {
  // Write your code here
  let res = 1;
  for (let i = n; i >= 1; i--) {
    res = res * i;
  }
  return res;
}
