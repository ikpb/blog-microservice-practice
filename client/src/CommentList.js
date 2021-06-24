import React from 'react';


function CommentList({comments}) {

    const renderedComments = comments.map(comment => {
        let content;

        switch(comment.status){
            case 'approved':
                content = comment.content;
                break;
            case 'pending':
                content = 'this comment is awaiting moderation'
                break;
            case 'rejected':
                content = 'This comment has ben rejected'
                break;
                default:
                    break;
        }


        return <li key={comment.id}>{content}</li>
    });
    return (
        <ul>
            {renderedComments}
        </ul>
    )
}

export default CommentList