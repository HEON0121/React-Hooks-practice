import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import UseStateApp from './useState/App'
// import UseEffectApp from './useEffect/App'
// import UseRefApp from './useRef/App'
//import UseRefApp from './useRef/DOM/App '
import UseContextApp from './useContext/App'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UseStateApp/> */}
    {/* <UseRefApp/> */}
    <UseContextApp/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
