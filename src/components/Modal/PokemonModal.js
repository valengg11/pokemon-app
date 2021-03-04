import React from 'react'
import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import './style.css'

const PokemonModal = ({ name, url }) => {
  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Compare</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}

export default connect((state) => {
  return state
})(PokemonModal)