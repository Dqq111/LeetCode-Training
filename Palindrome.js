var isPalindrome = function (x) {
  let xStr = x + "";
  let arrayStr = xStr.split("");
  let reverseStr = arrayStr.reverse();
  let joinedStr = reverseStr.join("");

  return joinedStr === xStr;
};

// methods chaining
var isPalindrome = function (x) {
  const xStr = x + "";
  const reversedStr = xStr.split("").reverse().join("");

  return reversedStr === xStr;
};

// without converting into a string
var isPalindrome = function (x) {
  let reverse = 0;
  let copy = x;

  while (copy > 0) {
    const digit = copy % 10;
    reverse = reverse * 10 + digit;
    copy = Math.floor(copy / 10);
  }

  return reverse == x;
};
