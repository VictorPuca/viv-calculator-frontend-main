import './App.css'

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import DataContext, { data } from '../src/data/DataContext'

// import Navegacao from './components/layout/Navegacao'
import Inicio from './components/views/Inicio'
import Sobre from './components/views/Sobre'
import { useState } from 'react'
import NovaNavegacao from './components/layout/NovaNavegacao'


const App = () => {

  const [ state, setState ] = useState(data)

  return (
    <DataContext.Provider value={{state, setState}}>
      <Router>
        <NovaNavegacao />
        <Switch>
          <Route exact path="/">
            <Inicio />
          </Route>
          <Route path="/sobre">
            <Sobre />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </DataContext.Provider>
  )
}

export default App