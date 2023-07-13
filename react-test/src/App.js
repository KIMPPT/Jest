import logo from "./logo.svg";
import "./App.css";
import CheckboxWithLabel from "./components/CheckboxWithLabel";
import CountView from "./components/CountView";
import CountButtons from "./components/CountButtons";
import { useState } from "react";

function App() {
  const[count,setCount]=useState(0);
  //증가하는 값 함수
  const increment=()=>{
    setCount(count+1);
  }
  //감소하는 값 함수
  const decrement=()=>{
    setCount(count-1);
  }
  return (
    <div className="App">
      {/*Test를 사용하지 않았을 때, 화면에 바로 출력해서 확인 */}
      <CheckboxWithLabel labelOn="on" labelOff="off" />
      {/*작성한 내용을 화면에 출력해서 확인 */}
      <CountView count={count}/>
      <CountButtons incrementFn={increment} decrementFn={decrement}/>
    </div>
  );
}

export default App;
