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

// 리터럴 타입
let gender = "male"; //male or female
// string 지정이 되어 어떤 문자든 입력할 수 있다.
gender = "A";

// male or female 을 값으로 지정하고 싶다면
let gender1: "male" | "female" = "male";
// gender1 = "A"; //error
gender1 = "female";

let user: { name: "철수" };
user = {
  name: "철수",
};
