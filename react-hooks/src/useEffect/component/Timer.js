import React, { useEffect } from 'react';

const Timer = () => {
    useEffect(()=>{
        // 타이머 컴포넌트가 맨처음 브라우저에 렌더링 될 때 실행
        const timer = setInterval(()=>{
            console.log('timer is going on');
        },1000);
        // 타이머 컴포넌트가 언마운트 될때 실행     
        return ()=>{
            clearInterval(timer);
            console.log('타이머가 종료되었습니다')
        }
    },[]);
    return (
        <div>
            <span>타이머 시작합니다. 콘솔을 보세요~</span>
        </div>
    );
};

export default Timer;