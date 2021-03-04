import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'
import './style.css'

const Navigation = () => {
  const [search, setSearch] = useState('')
  const input = useRef()

  useEffect(() => {
    fetch('')
  })

  const handleInput = (e) => {
    setSearch(e.target.value)
  }

  const NavActive = {
    color: 'blue'
  }

  return (
    <nav className='Navbar'>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          PokemonApp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              as={NavLink}
              to='/'
              exact
              activeStyle={NavActive}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to='/pokemons'
              activeStyle={NavActive}

            >
              Pokemons
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={handleInput}
              ref={input}
            />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  )
}

export default connect((state) => {
  return state
})(Navigation)


