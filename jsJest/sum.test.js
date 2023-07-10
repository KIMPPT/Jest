//ES6에서 값을 받아오는 import 
//import { sum } from "./sum";

//node에서 값을 받아오는 require
const sum = require("./sum");

test("1+2는 3 입니다", () => {
  expect(sum(1, 2)).toBe(4);
});

//test()를 활용하여 1+6이 7일 때 pass 인지 확인하세요
test("1+6는 7입니다", () => {
  expect(sum(1, 6)).toBe(7);
});
