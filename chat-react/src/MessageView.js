import React from "react";

export const MessageView = props => {
    //create scoped variable
    const messages = props.messages.map((message, index) => (
        <div
            className='ui message'
            key={index}
        >
            {message}
        </div>
    ));
    // resolve scoped `messages`
    return (
        <div className='ui comments'>
            {messages}
        </div>
    );
};
