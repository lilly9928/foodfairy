import React, { useState } from 'react';
import './App.css';


function App() {
  const [names, setNames] = useState([]);
  const [input, setInput] = useState('');
  
  const inputChange = (e) => {
    setInput(e.target.value);
  }

  const buttonClick = (e) => {
    setNames((prevState) => {
      console.log('등록하기 전의 names값', prevState);
      return [input, ...prevState];
    })
  }

  const onRemove = name => {
    setNames(names.filter((element) => element !== name))
  };

  return (
    <div className="App">
       <header className="App-header">
        <input type="text" value={input} onChange={inputChange}/>
        <button onClick={buttonClick}>추가</button>
        <button>생성</button>
        {names.map((name, index) => {
          return (<div key={index}>
            {name}
            <button onClick={() => onRemove(name)}>X</button>
            </div>)
        })}
      </header>
    </div>
  );
}

export default App;
