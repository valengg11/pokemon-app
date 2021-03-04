import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

import Home from './components/Home'
import PokemonData from './components/PokemonData'
import Navigation from './components/Navbar'


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Route path='/' exact component={Home} />
        <Route path='/pokemons' component={PokemonData} />
      </BrowserRouter>
    </Provider>
  )
}

export default App;

