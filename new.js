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
