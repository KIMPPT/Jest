function sum(a,b){
    return a+b;
}

//jest가 없을 경우 결과확인을 위해 우리가 작성한 코드
//콘솔창을 통해서 node js파일이름 으로 확인
//js파일은 브라우저에서만 확인이 가능했으나
//node를 통해 터미널에서 확인가능
console.log(sum(1,3))

//node에서 모듈로 만들어서 내보내는 내용
module.exports=sum;

//ES6버전
//export {sum};