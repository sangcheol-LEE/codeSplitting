import React,{useState} from 'react';
import logo from "./logo.svg";
import './App.css';
import loadable from '@loadable/component'
const SplitMe = loadable(() => import("./SplitME"), {
  fallback: <div>loading ....</div>
})

const App = () => {
  const [visible, setVisible] = useState(false);
  const onCLick = () => {
    setVisible(true)
  }
  const onMouseOver = () => {
    SplitMe.preload()
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p onClick={onCLick} onMouseOver={onMouseOver}>Heloo</p>
            {visible && <SplitMe />}
      </header>
    </div>
  );
};

export default App;