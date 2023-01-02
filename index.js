const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

String.prototype.pop = function (string) {
  // console.log(this.toString());
  const lastElement = this.toString().slice(-1);
  return [lastElement, this.substring(0, this.length - 1)];
};

// program 1

function getDateTime() {
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();
  const timeZone = date.getHours() < 12 ? "AM" : "PM";
  const time =
    date.getHours() +
    " " +
    timeZone +
    " : " +
    date.getMinutes() +
    " : " +
    date.getMinutes();
  const day = date.getDay();
  console.log("Today is : " + dayNames[day]);
  console.log("Time is : " + time);
}

// getDateTime();

// program 2

function rotateString() {
  let str = "w3resource";
  const strLenght = str.length;
  for (let i = 0; i < strLenght; i++) {
    const [poppedItem, subString] = str.pop();
    str = poppedItem + subString;
  }
  // This will return same string as we are just rotating it
  console.log(str);
  return str;
}

// rotateString();

// program 3

function findLeapYear(year) {
  if (year % 400 == 0) {
    console.log("leap Year");
  } else if (year % 4 == 0 && year % 100 != 0) {
    console.log("leap year");
  } else {
    console.log("not a leap year");
  }
}

// findLeapYear(3000)

// program4
function findSunday() {
  const start = 2014;
  const end = 2050;
  for (let i = start; i <= end; i++) {
    const date = new Date(i, 0);
    if (date.getDay() == 0) {
      console.log("1st Jan Sunday On Year: ", i);
    }
  }
}

// findSunday();

// program5
const randomNumber = Math.floor(Math.random() * 11);
function guessNumber() {
  console.log(randomNumber);
  readline.question("guess a number => ", (input) => {
    if (input == randomNumber) {
      console.log("you win !!");
      return;
    } else {
      console.log("you lost try again !!");
      guessNumber();
    }
    readline.close();
  });
}

// guessNumber();

function removeFromIndex(index, string) {
  string = string.slice(0, index) + string.slice(index + 1);
  console.log(string);
  return string;
}

// removeFromIndex(0, "w3schools");

//program6
function sameRightDigit(one, two, three) {
  const base1 = one % 10;
  const base2 = two % 10;
  const base3 = three % 10;
  console.log(base1, base2, base3);
  if (one % 10 == two % 10 && two % 10 == three % 10) {
    console.log("all three are same");
    return true;
  } else {
    console.log("not same");
    return false;
  }
}

// sameRightDigit(10, 20, 50);

//program7
function followAlpahbet(string) {
  let newStr = "";
  for (let i = 0; i <= string.length; i++) {
    newStr = newStr + String.fromCharCode(string.charCodeAt(i) + 1);
  }
  console.log(newStr);
}

// followAlpahbet("w3chools");

//program8

