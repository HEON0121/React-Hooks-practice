import React, { useState, useEffect } from 'react';
import Timer from './component/Timer';

// useEffect : 특정 컴포넌트가 마운트(렌더링)||update||마운트 해제될 때 등의 경우 특정작업을 처리하고 싶을때 작업을 useEffect의 콜백으로 
// 방법 1 : useEffect(()=>{//작업..}); 렌더링 될때 마다 실행
// 방법 2 : useEffect(()=>{//작업..}, [value]); 화면에 첫 렌더링 될때 실행 && value값이 바뀔 때 실행 
//      ㄴ 빈 배열을 전달하면 화면에 첫 렌더링 될때만 실행
// 예시 : useEffect(() => { //구독.. return()=>{ //구독해지..} },[]);
function App() {
    // const [count, setCount] = useState(1);
    // const [name, setName] = useState('');

    // const handleCountUpdate = () => {
    //     setCount(count + 1);
    // }

    // const handleInputChange = (e) => {
    //     setName(e.target.value)
    // }

    // // 렌더링 될 때마다 매번 실행됨
    // useEffect(()=>{        
    //     // ...
    //     console.log("렌더링 될 때마다 실행");        
    // },)
    // // 최초 한번 렌더링될 때 실행 후, 카운트 업데이트시 카운트 컴포넌트 렌더링 될때만 업데이트
    // useEffect(()=>{        
    //     // ...
    //     console.log("count update");        
    // }, [count]);  
    // // name update 시 변경
    // useEffect(() => {
    //     console.log("name update"); 
    // }, [name]);
    // return (
    //     <div>
    //         <button onClick={handleCountUpdate}>update</button><br/>
    //         <span>count: {count}</span>
    //         <input type='text' value={name} onChange={handleInputChange}></input>
    //         <span>name: {name}</span>
    //     </div>
    // );

    const [showTimer, setShowTimer] = useState(false);
    
    return (
        <div>            
            {showTimer && <Timer/>} 
            <button onClick={()=>setShowTimer(!showTimer)}>Toggle Timer</button>            
        </div>
    )
}

export default App;