//CountView의 내용을 테스트
import {render,screen} from '@testing-library/react'
import CountView from "../components/CountView";

//it을 통해서 test할 내용 작성
//props값을 적었을 때, 그 값이 들어간 text를 가진 HTML 확인
it('CountView의  props값에 따른 화면의 글자 확인', () => {
    //컴포넌트 실행
    render(<CountView count={5}/>)
    //글자값이 있는지 가져옴 : html/null
    //주의점 : 해당 문구에서 띄워쓰기를 포함해서 조금이라도 다르면 null이 뜬다
    const initalState=screen.queryByText('현재 숫자 : 5')
    //안에 값이 있으면 truthy=true
    //값이 없으면(null) 거짓
    expect(initalState).toBeTruthy()

    //한번 더 랜더하여서 내용 착기
    render(<CountView count={0}/>)
    const countState=screen.getByText("현재 숫자 : 0")
    //현재 가져온 html 엘리멘트가 Document에 있는지 확인
    expect(countState).toBeInTheDocument();
});
