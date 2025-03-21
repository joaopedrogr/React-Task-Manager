import { useState } from 'react';
import Nome from './Components/Nome'

function App() {
  const [aluno, setAluno] = useState('Aluno')

  function handleChangeName(nome){
    setAluno(nome)
  }

  return(
    <div>
      <h1>Minha página Web!</h1>
      <h2>Olá {aluno} </h2>
      <button onClick = { () => handleChangeName('João Pedro')}>
      Mudar nome
      </button>
    </div>
  );
}

export default App;

