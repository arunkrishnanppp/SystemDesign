import React from 'react';
import './comments.css';
export const CommentBox = ({ data }) => {
  return (
    <div>
      {data.map((comment) => {
        return (
          <div className='comment'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                className='user-image'
                src='https://www.redditstatic.com/avatars/defaults/v2/avatar_default_0.png'
              />
              <p>{comment.user}</p>
            </div>
            <p>{comment.comment}</p>
            <div className='replies'>
              {comment.replies && comment.replies.length > 0 && (
                <CommentBox data={comment.replies} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
