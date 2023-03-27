import React, {useEffect, useRef} from 'react';
// DOM요소에 접근하기 
// 대표적으로 input focus
const App = () => {
    const inputRef = useRef();
    useEffect(()=>{
        //console.log(inputRef);
        inputRef.current.focus();
    },[]);
    const signUp = () => {
        alert(`welcome ${inputRef.current.value}`);
        //  focus again
        inputRef.current.focus(); 
    }
    return (
        <div>
            <input ref={inputRef} type='text' placeholder='username'></input>
            <button onClick={signUp}>sign in</button>
        </div>
    );
}

export default App;