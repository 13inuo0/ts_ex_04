// 1. 매개변수도 반환하는 값도 없는 함수. = 반환하는 값에만 타입을 지정.
// function printHello() {
//   console.log("hello");
// }

// 반환하는 값이 없다는 의미로 void 타입을 지정.
function printHello(): void {
  console.log("hello");
}

// 2.매개변수를 전달받아 합을 반환하고 있는 덧셈 함수.
function add(n1: number, n2: number): number {
  return n1 + n2;
}

// 3.매개변수를 전달받아 매개변수를 문자열에 포함시켜 반환하고 있는 greet 함수.
// function greet(name) {
//   return `Hello,${name}`;
// }
function greet(name: string): string {
  return `Hello,${name}`;
}

// 4. 문자열 배열 요소를 매개변수로 받아 가장 긴 문자요소를 반환해주는 함수
function findLongestString(strings: string[]) {
  if (strings.length === 0) return ""; // 빈 배열이면 빈 문자열 반환

  return strings.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, strings[0]); // 배열의 첫 번째 항목을 초기값으로 설정
}

const words = ["apple", "banana", "cherry", "watermelon"];
const longestWord = findLongestString(words);
console.log(longestWord); // "watermelon" 반환.
