import React, { useState } from 'react';
import { create, all } from 'mathjs'

import Interface from './components/Interface';
import Screen from './components/Screen';
import CalcHistory from './components/CalcHistory';


const config = {}
const math = create(all, config)

function App() {

  const [value, setValue] = useState('')
  const [history, setHistory] = useState('')

  const buttonClickedHandler = type => {
    if (value.length < 9 || history.length < 21) {
      switch (type) {
        case 'C':
          setValue('')
          setHistory('')
          break;
        case '+':
          setValue('')
          setHistory(prevValue => prevValue + type)
          break;
        case '-':
          setValue('')
          setHistory(prevValue => prevValue + type)
          break;
        case 'x':
          setValue('')
          setHistory(prevValue => prevValue + '*')
          break;
        case '/':
          setValue('')
          setHistory(prevValue => prevValue + type)
          break;
        case '.':
          setValue(prevValue => prevValue + type)
          setHistory(prevValue => prevValue + type)
          break;
        case '=':
          setValue(math.evaluate(history))
          break;
        default:
          setValue(prevValue => prevValue + type)
          setHistory(prevValue => prevValue + type)
          break;
      }
    }
  }

  return (
    <div className="App">
      <main>
        <CalcHistory history={history} />
        <hr />
        <Screen screenValue={value} />
        <Interface clickButton={buttonClickedHandler} />
      </main>
    </div>
  );
}

export default App;
