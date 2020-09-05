import React from 'react';

const PostItem = ({ post, postIdx, setPostModalTitle, setShowPostModal, setPostInModal }) => {

  const handleEditClick = () => {
    setPostModalTitle('Edit Post');
    setPostInModal(post);
    setShowPostModal(true);
  }

  return (
    <div className="post-item">
        <div className="header">{post.heading}</div>
        <div className="description">{post.content}</div>
        <div className="edit"><a href="#" onClick={() => {handleEditClick()}}>edit</a></div>
    </div>
  )
}

export default PostItem;
