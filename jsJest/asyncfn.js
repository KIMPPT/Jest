//시간이 걸리는 콜백함수 작성
//setTimeout에서 작성한 user 값을 return을 통해 전달 할 수 없어서
//cehckTest라는 함수를 fetchUser을 사용할 때 만들어서 전달
//setTimeout으로 시간이 지난 이후에 cehckTest 진행가능
function fetchUser(id, checkTest) {
  //서버대신에 시간이 걸리는 timeout 함수 사용
  setTimeout(() => {
    console.log("0.1초가 걸렸습니다");
    const user = {
      id: id,
      name: "User" + id,
    };
    checkTest(user)
  }, 100);
}
//비동기함수
//Promise를 이용하여서 비동기 함수 작성
//return 값으로 Promise객체를 주게 되면, then,await를 통해서 값을 가져올 수 있다
function fetchUserPromise(id){
  //Promise 객체 생성
  // : 시간이 걸리는 함수를 넣어줌
  //Promise 안에 함수의 매개변수로 resolve를 사용하여 return값 전달
  return new Promise((resolve)=>{
    //시간이 걸리는 내용 작성
    console.log("0.1초가 걸립니다")
    //setTimeout을 이용하여 시간이 걸리는 내용 작성
    setTimeout(()=>{
      const user={
        id:id,
        name:"User"+id
      }
      resolve(user);
    },100)
  })
}
//함수를 전달한 객체
const asyncfn = { fetchUser,fetchUserPromise };

//내보내서 사용
module.exports = asyncfn;
