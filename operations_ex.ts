// 객체리터럴 함수시그니처
const operations = {
  add(n1: number, n2: number): number {
    return n1 + n2;
  },
  subtract: function (n1: number, n2: number): number {
    return n1 - n2;
  },
  multiply: (n1: number, n2: number): number => n1 * n2,
};

// 콜백 함수 시그니처
// function fetchData(callback: (data: string) => void) {
//   callback("some data");
// }
// fetchData((data: string): void => {
//   console.log(data);
// });

// 함수 호출하는 쪽에 타입을 지정하지 않아도 에러발생X 
function fetchData(callback: (data: string) => void) {
  callback("some data");
}
fetchData((data) => {
  console.log(data);
});

function processData(data: string, callback: (result: string) => void) {
  const result = data.toUpperCase();
  callback(result);
}
processData("hello", (result: string): void => {
  console.log(result);
});

// 3.
function doubleNum(item: number): void {
  console.log(item * 2);
}

function powNum(item: number): void {
  console.log(item * item);
}

function processItems(items: number[], callback: (item: number) => void) {
  items.forEach((item) => {
    callback(item);
  });
}

// 콜백 함수 정의 및 호출
processItems([1, 2, 3], doubleNum);
processItems([1, 2, 3], powNum);

// 4.
function fetchData1(callback: (error: Error | null, data: string | null) => void) {
  setTimeout(() => {
    // 에러가 없는 경우
    // callback(null, "Data fetched successfully");

    // 에러가 있는 경우
    callback(new Error("Data fetched Failed"), null);
  }, 1000);
}

// 콜백함수 정의 및 호출
fetchData1((error: Error | null, data: string | null): void => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
