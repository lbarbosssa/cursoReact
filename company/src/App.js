import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Site from './Site';
import Rodape from './componentes/Rodape'
import Cabecalho from './componentes/Cabecalho'
import Inicio from './componentes/Inicio'
import Servicos from './componentes/Servicos'
import Portifolio from './componentes/Portifolio'
import Precos from './componentes/Precos'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Cabecalho />
          
          <Route path='/' exact component={Inicio} />
          <Route path='/servicos' component={Servicos} />
          <Route path='/portifolio' component={Portifolio} />
          <Route path='/precos' component={Precos}/>         
          
          <Rodape />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
