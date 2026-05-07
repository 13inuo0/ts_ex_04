// 객체리터럴 함수시그니처
const operations = {
  add(n1:number, n2:number):number {
    return n1 + n2;
  },
  subtract: function (n1:number, n2:number):number {
    return n1 - n2;
  },
  multiply: (n1:number, n2:number):number => n1 * n2,
};
