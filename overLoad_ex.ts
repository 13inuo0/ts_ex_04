function greet3(name: string): string;
function greet3(name: string, age?: number): string;
function greet3(name: string, age?: number): string {
  if (age != undefined) {
    return `Hello, ${name}. You are ${age} years old`;
  } else {
    return `Hello, ${name}.`;
  }
}

console.log(greet3("Alice"));
console.log(greet3("Bob", 30));

// 시그니처
function add4(n1: number, n2: number): number;
function add4(n1: string, n2: string): string;
// 실제 구현
function add4(n1: number | string, n2: number | string): number | string {
  if (typeof n1 === "number" && n2 === "number") return n1 + n2;
  else if (typeof n1 === "string" && n2 === "string") return n1 + n2;
  throw new Error("Inavalid arguments");
}

const res1 = add4("a", "b"); //문자열 반환
const res2 = add4(10, 20); //덧셈 연산

console.log(res1);
console.log(res2);

function formatValue(value: number): number;
function formatValue(value: string): string;
function formatValue(value: string | number): string | number {
  if (typeof value === "string") {
    return value.trim().toUpperCase();
  } else {
    return value;
  }
}
const result1 = formatValue("hello");
const result2 = formatValue(10);

console.log(result1)
console.log(result2)
