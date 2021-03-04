import React from 'react'
import { connect } from 'react-redux'
import { Card, Col } from 'react-bootstrap'
import './style.css'

const PokemonCard = ({ name, url }) => {
  return (
    <div>
      <Col>
        <Card className='Card'>
          <Card.Img className='Card_img' variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title className='Card_name' >{name}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </div>
  )
}

export default connect((state) => {
  return state
})(PokemonCard)