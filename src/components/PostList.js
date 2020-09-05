import React from 'react';
import CreatePost from './CreatePost';
import PostItem from './PostItem';

const PostList = ({ posts, setPostModalTitle, setShowPostModal, setPostInModal }) => {

  return (
    <div>
      <CreatePost
        setShowPostModal={setShowPostModal}
        setPostModalTitle={setPostModalTitle} />
      <div className="post-list">
        {posts.map((post, index) =>
          <PostItem
            key={`${index}`}
            post={post}
            setPostModalTitle={setPostModalTitle}
            setShowPostModal={setShowPostModal}
            setPostInModal={setPostInModal}
          />
        )}
      </div>
    </div>
  )
}

export default PostList;
