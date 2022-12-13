import './App.css';
import { Input } from './components/input';
import { Flag } from './components/flag';

import brasil from './imgs/Flag_of_Brazil.svg.webp'

function App(props) {
  return (
    <main>
      <div className='tittle'>
        Conversor de Moedas
      </div>
      
      <div className='topInput'>
        <Flag id={'topFlag'} bandeira={brasil}/>
        <Input class={'userInput'} placeholder={'Digite o valor a ser convertido...'}/>
      </div>
      
      <div className='changeCoin'>

      </div>

      <div className='bottomInput'>
        <Flag id={'bottomFlag'} bandeira={brasil}/>
        <div className={'showResult'}></div>
      </div>     

      <button>CONVERTER</button>

    </main>
  );
}

export default App;
