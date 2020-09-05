import React, { useState } from 'react';

import PostList from './PostList';
import PostModal from './PostModal';

const PostContainer = ({ posts, categories, addCategory, addPost, editPost }) => {

  const [postInModal, setPostInModal] = useState({heading: '', content: '', categories: []});
  const [showPostModal, setShowPostModal] = useState(false);
  const [postModalTitle, setPostModalTitle] = useState('');

  return (
    <div className="post-container">

      <PostModal
        modalTitle={postModalTitle}
        show={showPostModal}
        setShow={setShowPostModal}
        selectedPost={postInModal}
        setSelectedPost={setPostInModal}
        addCategory={addCategory}
        addPost={addPost}
        editPost={editPost}
        categories={categories} />

      <PostList
        posts={posts}
        setPostModalTitle={setPostModalTitle}
        setShowPostModal={setShowPostModal}
        setPostInModal={setPostInModal} />
    </div>
  );
}

export default PostContainer;
