function same(arr1, arr2) {
  let count = 1;
  let obj = {};
  let x = 0;
  if (arr1.length != arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (count == arr2.length) {
      i = 0;
      count = 1;
      x += 1;
    }
    if (arr1.length <= x) break;
    if (arr1[x] * arr1[x] == arr2[i]) {
      obj[arr1[x]] = true;
      arr2.splice(i, 1);
      x += 1;
      i = -1;
      count = 1;
      console.log(arr1, arr2);
    } else {
      obj[arr1[x]] = false;
      count += 1;
    }
  }
  return obj;
}
// console.log(same([1, 2, 3], [2, 11, 16]))

function anagram(str1, str2) {
  let obj1 = {};
  let obj2 = {};
  let flag = true;
  if (str1.length != str2.length) return false;
  for (let i = 0; i < str1.length; i++) {
    obj1[str1[i]] ? (obj1[str1[i]] += 1) : (obj1[str1[i]] = 1);
    obj2[str2[i]] ? (obj2[str2[i]] += 1) : (obj2[str2[i]] = 1);
  }
  console.log(obj1, obj2);
  for (let key of str1) {
    if (obj1[key] == obj2[key]) {
      flag = true;
    } else {
      return false;
    }
  }
  return flag;
}

// console.log(anagram("mihir", "dihim"))

function sumzero(array1) {
  let res = [];
  let p1 = 0;
  let p2 = array1.length - 1;
  while (p1 != array1.length - 1) {
    let sum = array1[p1] + array1[p2];
    if (p1 == p2) {
      p1++;
      p2 = array1.length - 1;
    }
    if (array1[p1] == 0) {
      break;
    }
    if (sum == 0) {
      res.push(Array(array1[p1], array1[p2]));
      p1++;
      p2 = array1.length - 1;
      sum = 0;
    } else {
      p2--;
    }
  }
  return res;
}

// console.log(sumzero([-4, -3, -2, 0, 1, 2, 3, 4]))

function Unique(arr) {
  let p1 = 0;
  let p2 = 1;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[p1] == arr[p2]) {
      p2++;
    } else {
      count++;
      p1 = p2;
      p2++;
    }
  }
  return count;
}
// console.log(Unique([1, 1, 2, 2, 3, 4, 5, 7, 8, 8, 8, 8]))
function subarraySum(arr, n, s) {
  let sum = 0;
  let pointer = 1;
  for (let i = 0; i < n; i++) {
    sum = sum + arr[i];
    if (arr[i] == s) {
      return i;
    }
    if (sum == s) {
      i++;
      pointer = pointer + 1;
      console.log(i, pointer);
      return { i, pointer };
    }
    if (sum > s) {
      i = pointer;
      pointer++;
      sum = 0;
    }
    console.log(sum);
  }
}

function subarraySum2(arr, num) {
  if (arr.length == 0) {
    return 0;
  }
  // console.log("first")
  let max = 0;

  let count = 1;
  for (let i = 0; i < num; i++) {
    max = max + arr[i];
  }
  let temp = max;
  while (count != arr.length - num + 1) {
    temp = temp - arr[count - 1] + arr[count + 2];
    console.log("first", temp);
    if (temp > max) {
      max = temp;
    }
    count++;
  }
  return max;
}

// console.log(subarraySum2([7, 6, 3, 21, 4, 5, 6, 7, 8], 3));

function pattern(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n + 1; j++) {
      if (i == j || (n * 2) / 2 == j) {
        process.stdout.write("*" + " ");
      } else {
        process.stdout.write("0" + " ");
      }
    }
    for (let k = n - 1; k >= 0; k--) {
      if (i == k) {
        process.stdout.write("*" + " ");
      } else {
        process.stdout.write("0" + " ");
      }
    }
    console.log();
  }
}
// pattern(3)

function pattern2(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n + 1; j++) {
      if (j <= (n - 1) / 2) {
        process.stdout.write(" ");
      } else {
        process.stdout.write("*" + " ");
      }
    }
    console.log();
  }
}

// pattern2(5)

function binarySearch(arr, num) {
  let mid;
  let start = 0;
  let end = arr.length - 1;
  if (arr.length % 2 == 0) {
    mid = (start + end) / 2;
  } else {
    mid = (start + end + 1) / 2;
  }
  if (arr[mid] == num) {
    return mid;
  }
  if (arr[mid] < num) {
    binarySearch(arr.subarray(start, mid), num);
  }
  if (arr[mid] > num) {
    binarySearch(arr.subarray(mid + 1, end), num);
  }
}

function binarySearch2(arr, num) {
  let start = 0;
  let end = arr.length;
  let mid = Math.floor(arr.length / 2);
  console.log("arr mid", arr[mid]);
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] == num) {
      return mid;
    } else if (arr[mid] > num) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

// console.log(binarySearch([1, 2, 3, 4, 5], 1))

function isSubsequence(str1, str2) {
  let count = 0;
  let start = null;
  if (str1.length == 0 || str2.length == 0) return false;
  for (let i = 0; i < str2.length; i++) {
    if (str1[0] == str2[i]) {
      start = i;
      count++;
      break;
    }
  }
  if (start == null) {
    return false;
  }

  let next = start + 1;
  while (count != str1.length) {
    if (next == str2.length) {
      return false;
    }
    if (str2[next] == str1[count]) {
      count++;
      start = next + 1;
    }
    next++;
  }
  console.log(count);
  return true;
}

// console.log(isSubsequence("abc", "abracadabra"))

function minSubArrayLen(arr, sum) {
  let len = arr.length;
  let start = 0;
  let tempSum = arr[start];
  let end = 1;
  if (arr.length == 0) {
    return 0;
  }
  while (start != arr.length - 1) {
    if (tempSum >= sum) {
      if (len > end - start) {
        len = end - start;
      }
      tempSum = tempSum - arr[start];
      start++;
      continue;
    }
    tempSum = tempSum + arr[end];
    end++;
  }
  return len;
}

// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));

function reverseSubArray(arr, N, K) {
  let times = Math.ceil(N / K);
  let tempArr = [];
  for (let i = 1; i <= times; i++) {
    let right = i * K - 1;
    while (!arr[right]) {
      right--;
    }
    let left = (i - 1) * K;
    while (right !== left - 1) {
      tempArr.push(arr[right]);
      right--;
    }
  }
  return tempArr;
}

// console.log(reverseSubArray([1, 2, 3, 4, 5], 5, 3));

function factorial(num) {
  if (num == 1) return 1;
  return num * factorial(num - 1);
}
// console.log(factorial(3));

// function timePrint(times) {
//   let remainingSec = times*1000;
//  const test =  setInterval(()=>{
//     remainingSec -= 1000;
//     if(remainingSec == 0){
//       clearInterval(test);
//     }
//     console.log("Hello");
//   },1000)
// }

function timePrint() {
  const test = setInterval(() => {
    console.log("Hello");
  }, 1000);
  const test2 = setInterval(() => {
    clearInterval(test);
    clearInterval(test2);
  }, 4010);
}

// timePrint()

function power(num, pow) {
  if (pow == 0) {
    return 1;
  }
  return num * power(num, pow - 1);
}

// console.log(power(3, 3));

function productOfArray(arr) {
  if (arr.length == 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

// console.log(productOfArray([1,2,3]))

function recursiveAdd(num) {
  if (num == 1) {
    return 1;
  }
  return num + recursiveAdd(num - 1);
}

// console.log(recursiveAdd(10))

function fibonacci(n, num1, num2) {
  if (n == 1) {
    return num2;
  }
  let sum = num1 + num2;
  return fibonacci(n - 1, num2, sum);
}

// console.log(fibonacci(28, 0, 1));

function reverseString(str) {
  if (str.length == 0) {
    return str;
  }
  return str.slice(-1) + reverseString(str.slice(0, -1));
}
// console.log(reverseString("Mihir"));

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] == str[str.length - 1]) {
    return isPalindrome(str.slice(1, -1));
  } else {
    return false;
  }
}

// console.log(isPalindrome("tacocat"));

function isOdd(val) {
  return val % 2 !== 0;
}
function someRecursive(arr, callback) {
  if (arr.length == 0) {
    return false;
  }
  if (callback(arr[0])) {
    return true;
  } else {
    return someRecursive(arr.slice(1), callback);
  }
}

// console.log(someRecursive([ 2, 8, 4, 6], isOdd));

function flatten(arr) {
  let newArr = [];
  inner(arr, newArr, 0);
  return newArr;
}

function inner(element, outputArray, count1) {
  if (count1 >= element.length) {
    return;
  }
  if (Array.isArray(element[count1])) {
    inner(element[count1], outputArray, 0);
  } else {
    outputArray.push(element[count1]);
  }
  inner(element, outputArray, count1 + 1);
}

// console.log(flatten([1, 2, [3, 4, 5, 6], 7]));

function capitalizeFirst(arr) {
  let index = 0;
  let newArr = [];
  function inner(arr, newArr, index) {
    if (arr.length == index) {
      return newArr;
    }
    let str =
      arr[index].charAt(0).toUpperCase() + arr[index].slice(1).toLowerCase();
    newArr.push(str);
    return inner(arr, newArr, index + 1);
  }
  return inner(arr, newArr, index);
}

function capitalizeFirst(arr, index) {
  let newArr = [];
  if (arr.length == index) {
    return newArr;
  }
  let str =
    arr[index].charAt(0).toUpperCase() + arr[index].slice(1).toLowerCase();
  newArr.push(str);
  return newArr.concat(capitalizeFirst(arr, index + 1));
}

// console.log(capitalizeFirst(["car", "taco", "banana"], 0));

// let sum = 0;
// function nestedEvenSum(obj) {
//   let key = Object.keys(obj);
//   return innerSum(obj, key, 0);
// }

// function innerSum(obj, keys, index) {
//   if (index == keys.length) {
//     return sum;
//   }
//   if (typeof obj[keys[index]] != "object") {
//     if (obj[keys[index]] % 2 == 0) {
//       sum = sum + obj[keys[index]];
//       console.log("sum before ===> ", sum);
//     }
//   } else {
//     innerSum(obj[keys[index]], Object.keys(obj[keys[index]]), 0);
//   }
//   innerSum(obj, keys, index + 1);
//   return sum;
// }

function nestedEvenSum(obj) {
  let key = Object.keys(obj);

  let sum = 0;

  return sum + innerSum(obj, key, 0, sum);
}

function innerSum(obj, keys, index, sum) {
  if (index == keys.length) {
    return sum;
  }

  if (typeof obj[keys[index]] != "object") {
    if (obj[keys[index]] % 2 == 0) {
      sum = sum + obj[keys[index]];
    }
  } else {
    sum = innerSum(obj[keys[index]], Object.keys(obj[keys[index]]), 0, sum);
  }

  sum = innerSum(obj, keys, index + 1, sum);
  return sum;
}

var obj2 = {
  a: 2,
  b: { b: 2, c: 4, bb: { k: 8 } },
  c: 4,
  d: 20,
  e: 50,
};

// console.log(nestedEvenSum(obj2));

function getTotalX(a, b) {
  let arr = [];
  let start = a[0] + 1;
  let end = b[b.length - 1];
  let count = 0;

  for (let i = start; i <= end; i++) {
    let flag = false;
    for (let j = 0; j < a.length; j++) {
      if (i % a[j] == 0) {
        flag = true;
      } else {
        flag = false;
        break;
      }
    }
    if (flag == true) {
      arr.push(i);
    }
  }

  for (let k = 0; k < arr.length; k++) {
    let flag2 = false;
    for (let l = 0; l < b.length; l++) {
      if (b[l] % arr[k] == 0) {
        flag2 = true;
      } else {
        flag2 = false;
        break;
      }
    }
    if (flag2 == true) {
      count++;
    }
  }
  return count;
}

// console.log(getTotalX([2, 6], [24, 36]));
