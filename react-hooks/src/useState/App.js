import { useState } from "react";

// ex)만약 무거운 작업이 렌더링 때 마다 실행된다면>?
const heavyWork = () => {
  console.log('very very heavy work');
  return ['홍길동', '김민수']
}
function App() {
  //#1
    const [time, setTime] = useState(1);
  const handleClick = () => {
    let newTime;
    if(time>=12){
        newTime=1;
    } else {
        newTime = time+1;
    }
    setTime(newTime);
  } 

  //#2
    // const [names, setName] = useState(['홍길동', '김민수']);
    // *특정 작업을 맨처음 렌더링할 때에만 처리하고싶다면, 콜백으로 넣기 
    // const [names, setName] = useState(heavyWork());
    const [names, setName] = useState(() => {
      return heavyWork();
    });
    //state tracking
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
        //console.log('inputChange : '+inputChange)
        
    }
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {handleUpload()} 
    }
    const handleUpload = () => {
        setName((prevState)=>{
          console.log('prevState : '+prevState);
            return [input, ...prevState];
        });
    }
    

  return (
    <div>
        {/* #1 */}
      <span>현재 시각 : {time}시</span>
      <button onClick={handleClick}>Update</button>
        {/* #2 */}
      <div>
        <input id='name' type="text" value={input} onChange={handleInputChange} onKeyDown={handleKeyPress}></input>
        <button onClick={handleUpload}>Upload</button>
        {names.map((name,idx)=>{
            return <p key={idx}>{name} <button key={idx}>x</button></p>
        })}
      </div>
    </div>
  );
}

export default App