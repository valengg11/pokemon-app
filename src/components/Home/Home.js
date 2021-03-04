import { Button } from 'bootstrap'
import React from 'react'
import { connect } from 'react-redux'
import './style.css'

const Home = () => (
    <h1>Show All Pokemons</h1>
)

export default connect((state) => {
  return state
})(Home)

