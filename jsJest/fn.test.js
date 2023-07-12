const fn = require("./fn");

test("객체people이 홍길동과 20을 가진다", () => {
  expect(fn.people("홍길동", 20)).toEqual({ name: "홍길동", age: 20 });
});
test("객체people이 홍길동과 20을 가진다", () => {
  expect(fn.people("홍길동", 20)).not.toStrictEqual({
    name: "홍길동",
    age: 20,
  });
});
test("should first", () => {
  expect(fn.people("성춘향", 23).to);
});

//소수끼리의 계산에서 사용되는 matcher
//toBeCloseTo()
test("0.1+0.2는 0.3입니다", () => {
  expect(0.1 + 0.2).toBe(0.3);
});
test("0.1+0.2는 0.3입니다", () => {
  expect(0.1 + 0.2).toBeCloseTo(0.3);
});

//문자열에서 정규표현식을 통해서 확인 할 수 있다
//toMatch()
// /홍/ 과 같은 정규식 규칙과 , "홍"과 같은 문자열로 찾을 수 있다
test("홍 이라는 글자가 들어간다", () => {
  expect("홍길동").toMatch(/홍/);
});

//배열안의 값을 찾을 때, toContain 사용
test("배열안에 숫자 1이 들어있다 ", () => {
  expect([1, 2, 3]).toContain(1);
});
//오류있는 함수 확인
//thThrow(Error),toThrow()를 통해서 오류가 있다는 것을 확인할 수 있다

test("name 값이 없을 때 오류", () => {
  expect(() => fn.makeError()).toThrow(Error);
});
