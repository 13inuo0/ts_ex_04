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

// num1은 바뀔 가능성이 전형 없기때문에 추론을 하게되면 literal 타입으로 10을 지정하게 된다.
const num1 = 10;

// 참조자료형은 예외. let 과 const 키워드에 따른 타입 추론의 차이가 없다.
const nums = [10, 20];
nums.push(30); // push 메서드를 통해 값이 달라질 수 있다.
const user2 = {
  name: "철수",
};
user2.name = "영희"; // 객체의 참조를 통해 다른값으로 변경될 수 있다.
// 재할당이 불가한 것이지 할당된 값을 변경할 수 있다는 특징으로 리터럴타입으로 추론되지 않는다.

// 주의. 변수 선언과 동시에 값을 할당해야한다.

// 잘못 된 예 1
// let a;
// a = 10;

// 잘못 된 예 2
// function add(n1, n2) {
//   return n1 + n2;
// }
