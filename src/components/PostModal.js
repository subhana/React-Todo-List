import React, { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import CategoryModal from './CategoryModal';

const PostModal = ({ modalTitle,
                     show,
                     setShow,
                     selectedPost,
                     setSelectedPost,
                     addCategory,
                     addPost,
                     editPost,
                     categories }) => {

  const [showCategoryModal, setShowCategoryModal] = useState(false);

  const handleHeadingChange = (newHeading) => {
    setSelectedPost((prevPost) => ({
       ...prevPost,
       heading: newHeading
    }));
  }

  const handleContentChange = (newContent) => {
    setSelectedPost((prevPost) => ({
       ...prevPost,
       content: newContent
    }));
  }

  const openCategoryModal = () => {
    setShowCategoryModal(true);
  }

  const updateSelectedCategories = () => {
    const selectedCategories = [...selectedPost.categories];
    selectedCategories.push(categories[categories.length-1].id);

    setSelectedPost((prevPost) => ({
       ...prevPost,
       categories: selectedCategories
    }));
  }

  const handleCategoryChange = (selectedOptions) => {

    if(selectedOptions[0].innerText === 'Create New Category') {
      openCategoryModal();
      return;
    }

    const selected = [];
    for(let i=0; i<selectedOptions.length; i++) {
      categories.forEach((category, idx) => {
        if(selectedOptions[i].innerText === category.text) {
          selected.push(category.id);
        }
      })
    }
    setSelectedPost((prevPost) => ({
       ...prevPost,
       categories: selected
    }));
  }

  const clearSelectedPost = () => {
    setSelectedPost({heading: '', content: '', categories: []});
  }

  const handleSave = () => {
    selectedPost.id ? editPost(selectedPost) : addPost(selectedPost);
    clearSelectedPost();
    setShow(false);
  }

  const handleClose = () => {
    clearSelectedPost();
    setShow(false);
  }

  return (
    <>
    <CategoryModal
      show={showCategoryModal}
      setShow={setShowCategoryModal}
      addCategory={addCategory}
      updateSelectedCategories={updateSelectedCategories} />
    <Modal show={show} onHide={handleClose} backdrop="static"
      keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridHeading">
              <Form.Label>Heading</Form.Label>
              <Form.Control type="text"
                            value={selectedPost.heading}
                            onChange={(e) => {handleHeadingChange(e.target.value)}}
                            placeholder="Heading" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridContent">
              <Form.Label>Content</Form.Label>
              <Form.Control type="text"
                            value={selectedPost.content}
                            onChange={(e) => {handleContentChange(e.target.value)}}
                            placeholder="Content" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                multiple
                size="sm"
                value={selectedPost.categories}
                custom
                onChange={(e) => {handleCategoryChange(e.target.selectedOptions)}}>
                  {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.text}
                      </option>
                  ))}
              </Form.Control>
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

export default PostModal;
