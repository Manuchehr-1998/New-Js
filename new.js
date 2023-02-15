function decName(name) {
  return name;
}
console.log(decName("Hello"));

let arr = 1;
(function (a, b) {
  let arr2 = 2;
  console.log(arr2);
});
console.log(arr);

let anonmysFunctions = function (par) {
  return par;
};
console.log(anonmysFunctions("hi"));

let arrowFunctions = (res) => {
  return res;
};
console.log(arrowFunctions("hi"));
// function Name(a, b) {
//   const age = 2037 - a;
//   console.log(`${b} is ${age} years old`);
//   return age;
// }

// let age1 = Name(1991, "jonas");

// console.log(age1);
// task 1
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, 2));
// task 2
// function max(a,b,c) {
//   let res=Math.max(a,b,c)
//   return res
// }
// console.log(max(5,4,1));
// task 3
// function even(a) {
//   let res = a / 2 + 1;
//   return Math.floor(res) * 2;
// }
// console.log(even(6));
// task 4
// function sumOf(a, b) {
//   let res=0
//   for (let i = a; i <= b; i++) {
//     res+=i
//   }
//   return res
// }
// console.log(sumOf(1, 5));
// task 5
// function sumOfNumbers(a) {
//   let first = 0;
//   let two = 0;
//   let tree = 0;
//   let res = 0;
//   first = a % 10;
//   two = Math.floor(a / 10) % 10;
//   tree = Math.floor(a / 100);
//   return first + two + tree;
// }
// console.log(sumOfNumbers(123));
// task 6
// function even(a, b) {
//   let even = "";
//   for (let i = a; i <= b; i++) {
//     if (i % 2 == 0) {
//       even += i + " ";
//     }
//   }
//   return even;
// }
// console.log(even(1, 10));
// task 7
// function square(a, b) {
//   let c;
//   for (let i = a; i <= b; i++) {
//     c = i * i;
//     if (c >= a && c <= b) {
//       console.log(c);
//     }
//   }
// }
// console.log(square("1", "10"));
// task 8
// function gip(a, b) {
//   let c = 0;
//   c = Math.sqrt(a * a + b * b);
//   return c;
// }
// console.log(gip(10, 10));
// task 9
// function factaril(a) {
//   let res = 1;
//   for (let i = 1; i <= a; i++) {
//     res *= i;
//   }
//   return res;
// }
// console.log(factaril(5));
// task 10
// function palindrom(a) {
//   let res = 0;
//   let ver = "";
//   for (let i = a; i >= 1; ) {
//     res = ver += i % 10;
//     i = Math.floor((i /= 10));
//   }
//   return res == a;
// }
// console.log(palindrom(101));
// task 11
// function entered(a, b) {
//   let res = 0;

//   for (let i = a; i >= 1; ) {
//     if (i % 10 == b) {
//       res++;
//     }
//     i = Math.floor((i /= 10));
//   }
//   return res;
// }

// console.log(entered(616164, 6));
// task home 2
// function years(a) {
//   let res = 2023 - a;
//   return res * 365;
// }
// console.log(years(1998));
// task home 3
// function sumOfIntenNumbers(a, b, c) {
//   let pos = 0;
//   let neg = 0;
//   let zero = 0;
//   let sum = 0;
//   if (a > 0) pos++;
//   if (a < 0) neg++;
//   if (a == 0) zero++;

//   if (b > 0) pos++;
//   if (b < 0) neg++;
//   if (b == 0) zero++;

//   if (c > 0) pos++;
//   if (c < 0) neg++;
//   if (c == 0) zero++;
//   sum = a + b + c;
//   return `sum: ${sum}
//   pos ${pos}
//   neg ${neg}
//   zero ${zero}`;
// }
// console.log(sumOfIntenNumbers(-1, 8, 0));
//task home 4
// function reverse(a) {
//   let sum = " ";
//   let res = 0;
//   for (let i = a; i > 0; ) {
//     res = sum += i % 10;
//     i = Math.floor((i /= 10));
//   }
//   return res;
// }
// console.log(reverse(6547));
