import React from 'react'
import Topo from './Componentes/Topo'
import Conteudo from './Componentes/conteudo'
import Rodape from './Componentes/Rodape';
import './App.css';

function App() {
  return (
    <div className="App">
      <Topo/>
      <Conteudo/>
      <Rodape/>
    </div>
  );
}

export default App;
