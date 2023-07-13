//render : 컴포넌트를 실행시키는 함수
//screen : 랜더이후에 화면에 출력되는 html 엘리먼트를 가져오는 객체
//>> render를 통해서 가져와 쓸 수도 있다
//예) const{getByYext}=render(컴포넌트)
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
// count=0 인지 확인
test('App에서 CountView가 count:0 확인', () => {
  render(<App />);
  const view=screen.getByText('현재 숫자 : 0');
  expect(view).toBeInTheDocument();
});

//증가버튼을 눌렸을 때 값이 증가하는지
it('App에서 증가버튼을 눌렸을 때 값이 바뀌는지 확인', () => {
  render(<App/>)
  //증가버튼
  const incrementBtn=screen.getByTestId('incrementBtn');
  //이벤트 실행 후 증가값 확인
  fireEvent.click(incrementBtn);
  fireEvent.click(incrementBtn);

  const changeState=screen.getByText("현재 숫자 : 2")
  expect(changeState).toBeInTheDocument();
});

//감소버튼을 눌렸을 때 값이 감소하는지
it('App에서 감소버튼을 눌렸을 때 값이 바뀌는지 확인', () => {
  render(<App/>)
  //증가버튼
  const decrementBtn=screen.getByTestId('decrementBtn');
  //이벤트 실행 후 증가값 확인
  fireEvent.click(decrementBtn);
  fireEvent.click(decrementBtn);

  const changeState=screen.getByText("현재 숫자 : -2")
  expect(changeState).toBeInTheDocument();
});