import { screen,render, fireEvent } from "@testing-library/react";
import CountButtons from "../components/CountButtons";
// npm test 주소 를 적으면 원하는 파일만 test 가능
// npm test src/__tests__/CountButtons-test.js
it('버튼이 있는지 확인', () => {
    //date-tested를 통해 확인
    render(<CountButtons/>);
    //작성한 엘리멘트가 존재하는지 확인
    //html 태그에 data-tested를 이용하여 getByTestId를 통해 가져옴
    const incrementBtn=screen.getByTestId('incrementBtn')
    const decrementBtn=screen.getByTestId('decrementBtn')
    expect(incrementBtn).toBeInTheDocument();
    expect(decrementBtn).toBeInTheDocument();
});

//props값에 함수를 넣었을 때 실행 여부
it('CountButtons의 props값으로 함수 확인', () => {
    //직접 함수 작성은 불가능
    //그래서 임의 함수를 jest에서 받아와서 사용
    const incrementFn=jest.fn();
    const decrementFn=jest.fn();
    //임의로 받아온 함수 넣어주기
    render(<CountButtons incrementFn={incrementFn} decrementFn={decrementFn}/>)
    //임의로 받아온 함수가 이벤트에 따라서 실행되는지 확인
    //함수와 이벤트와의 연결 여부 확인
    //내용확인을 위해 버튼 엘리멘트를 가져옴
    const incrementBtn=screen.getByTestId('incrementBtn')
    const decrementBtn=screen.getByTestId('decrementBtn')
    //fireEvent를 추가하고, fireEvent를 통해서 이벤트 발생
    fireEvent.click(incrementBtn);
    fireEvent.click(decrementBtn);
    //1. 이벤트가 발생되었는지 확인 
    //2. 함수 실행
    //toBeCalled();
    //함수가 실행되었는지를 볼 수 있다
    expect(incrementFn).toBeCalled();
    expect(decrementFn).toBeCalled();
});
