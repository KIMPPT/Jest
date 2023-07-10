function people(name, age) {
  return { name: name, age: age ,job:undefined};
}
//객체 안에 함수를 넣어 전달
const fn = {
  people,
};
//함수를 가진 객체를 내보냄
module.exports = fn;
