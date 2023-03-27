import React, { useState, useRef, useEffect } from 'react';
// useRef > const ref = useRef(value) *ref => {current:value}
// 2가지 상황에서 사용
// 상황1. useState처럼 저장공간으로 사용 
// State 변화 -> 렌더링 -> 컴포넌트 내부 변수들 초기화
// Ref 변화 -> No 렌더링 -> 변수들 값 유지
// State 변화 -> 렌더링 -> Ref값 유지


// 상황2. DOM 요소에 접근 
// Document.querySelector 같이..

const App = () => {
    // const [count, setCount] = useState(0);
    // const countRef = useRef(0);//countRef.current

    // console.log('rendering..'); // useState는 값이 바뀔때 마다 계속 화면 렌더링  
    // const increaseCountState = () => {
    //     setCount(count + 1);
    // }
    // const increaseCountRef = () => {
    //     countRef.current = countRef.current + 1;
    //     console.log('Ref : ', countRef.current); // useRef는 값만 바뀌고 화면 렌더링이 안되다 화면 렌더링이 되면 바뀐 값 반영
    // }
    // const [renderer, setRenderer] = useState(0);
    // const doRendering = () => {
    //     setRenderer(renderer + 1);
    // }
    // const countRef = useRef(0);
    // // Ref값은 렌더링 해도 값 적립
    // const increaseRef = () => {
    //     countRef.current = countRef.current + 1;
    //     console.log('Ref : ', countRef.current);
    // }
    // let countVar = 0;
    // // 변수는 렌더링 때마다 값 초기화
    // const increaseVar = () => {
    //     countVar = countVar + 1;
    //     console.log('Var : ', countVar);

    // }
    const [count, setCount] = useState(1);
    // 렌더링 몇번 되는지 확인
    const renderCount = useRef(1);
    useEffect(()=>{
        // useRef는 변화는 감지하지만 렌더링을 발생시키고 싶지 않을 때 사용 
        renderCount.current = renderCount.current+1;
        console.log('렌더링 수: ',renderCount.current);
    })
    return (
        // <div>
        //     <p>State: {count}</p>
        //     <p>Ref: {countRef.current}</p>
        //     <button onClick={increaseCountState}>State 올려</button>
        //     <button onClick={increaseCountRef}>Ref 올려</button>
        // </div>
        // <div>
        //     <p>Ref : {countRef.current}</p>
        //     <p>Var : {countVar}</p>
        //     <button onClick={doRendering}>Render</button>
        //     <button onClick={increaseRef}>Ref 올려</button>
        //     <button onClick={increaseVar}>Var 올려</button>
        // </div>
        <div>
            <p>Count : {count}</p>
            <button onClick={()=>setCount(count + 1)}>카운트 올리기</button>
        </div>
    );
};

export default App;