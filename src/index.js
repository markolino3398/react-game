import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import "./game-style/style/index.css";
import GameView from "./game-tools/utils/fullscreen/GameView";
import GameContainer from "./game-component/GameContainer";


ReactDOM.render(

  <React.StrictMode>
      <GameView component={() => { return <GameContainer/>; }} backgroundColor="#fff" />
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
