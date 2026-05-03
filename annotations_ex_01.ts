// 기본 자료형
let num: number = 10;
let str: string = "A";
let bol = true;
let und = undefined;
let nul = null;
let sym = Symbol();

// 참조 자료형
let arr = [10, 20];
let obj = { name: "kim" };
let fun = function () {};

// 매개변수와 상관없이 string 타입으로 추론된다.
function add(n1: number, n2: number) {
  return "A";
}
