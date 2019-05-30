import React from 'react';
import Comment from './Comment';
const Comments = props => {
    const { comments } = props;
    if (!comments) {
        return <h2>Error loading comments!</h2>;
    }
    return (
        <div className="ui list">
            {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
        </div>
    );
};
export default Comments;
