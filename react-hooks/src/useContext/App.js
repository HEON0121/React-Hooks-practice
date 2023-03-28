import React, { useState } from 'react';
import Page from './Component/Page'
import { ThemeContext } from './context/ThemeContext'; 
import { UserContext } from './context/UserContext';
import './App.css'
// useContext는  App 안에서 전역적으로 사용하는 데이터를 컴포넌트끼리 쉽게 쓸수 있게 해줌
// useContext를 사용하면 컴포넌트를 재사용하기 어려워 질 수 있따
// prop drilling을 피하기 위한 목적이라면 Component Composition(컴포넌트 합성)을 먼저 고려해보자
const App = () => { 
    const [isDark, setIsDark] = useState(false);
    return (
        <UserContext.Provider value={'user'}>
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
            <Page/>
        </ThemeContext.Provider>
        </UserContext.Provider>
    );
};

export default App;