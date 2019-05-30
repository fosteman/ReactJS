import React from 'react';
const Comment = props => {
    const { comment } = props; //argument ES6-destruction
    return (
        <div className="comment" key={comment.id}>
            <p className="content"> {comment.content} </p>
            <p className="profile"> {comment.profile} </p>
        </div>
    );
};
export default Comment;
