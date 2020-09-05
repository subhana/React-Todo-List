import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const CategoryModal = ({ show, setShow, addCategory, updateSelectedCategories }) => {

  const [selectedCategory, setSelectedCategory] = useState('');

  const clearSelectedCategory = () => {
    setSelectedCategory('');
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  }

  const handleSave = () => {
    addCategory({text: selectedCategory});
    updateSelectedCategories();
    clearSelectedCategory();
    setShow(false);
  }

  const handleClose = () => {
    clearSelectedCategory();
    setShow(false);
  }

  return (
    <>
    <Modal show={show} onHide={handleClose} backdrop="static"
      keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridCategory">
              <Form.Label>Heading</Form.Label>
              <Form.Control
                type="text"
                placeholder="Category"
                value={selectedCategory}
                onChange={(e) => {handleCategoryChange(e.target.value)}} />
            </Form.Group>
          </Form.Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary" onClick={handleSave}>Save</Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default CategoryModal;
