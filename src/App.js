import React, { useState } from 'react';

function App() {
  // const randonNum1 = Math.floor(Math.random() * 10)
  // const randonNum2 = Math.floor(Math.random() * 10)
  function randomNum(max, min) {
    const ranNum = Math.floor(Math.random()*(max-min))+min;
    return Number(ranNum)
  }
  // const num2 = randomNum(1,9);


  const [num1, setNum1] = useState(randomNum(1,9));
  const [num2, setNum2] = useState(randomNum(1,9));

  const result = num1 * num2;

  const [value, setValue] = useState('')
  
  const onChangeInput = (e)=>{
    setValue(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(value)

    
  }
  
  const text = (text) => {
    if(result == value) {
      return text = '정답입니다';
    }
    else {
      return text = '땡!'
    }
  }

  const onKeyPressInput = (e) => {
    if(e.key == 'Enter') {
      return (
        setNum1(randomNum(1,9)),
        setNum2(randomNum(1,9)),
        setValue('')
      );
    }
    
  }



  return (
    <>
      <div>{num1} * {num2} 은?</div>
      <form onSubmit={onSubmit}>
        <input placeholder='뭘까요~' onChange={onChangeInput} value={value} onKeyPress={onKeyPressInput}/>
      </form>
      <div>{text()}</div>
    </>
  );
}
/*
  숫자 두개 랜덤 띄우기
  인풋에 답 받기
  두개 랜덤 곱한값과 답받은 값 같은지 비교
  같으면 정답입니다
  틀리면 땡


*/




export default App;
