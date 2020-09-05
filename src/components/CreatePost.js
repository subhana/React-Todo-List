import React from 'react';
import PostModal from './PostModal';

const CreatePost = ({ setShowPostModal, setPostModalTitle }) => {

  const handleCreatePostClick = () => {
    setPostModalTitle('Add New Post');
    setShowPostModal(true);
  }

  return (
    <div className="create-post">
      <button type="button" onClick={() => {handleCreatePostClick()}}>
        Create Post
      </button>
    </div>
  )
}

export default CreatePost;
