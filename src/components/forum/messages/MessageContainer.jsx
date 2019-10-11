import React from 'react';
import Message from './Message'

const MessageContainer = (props) => {

  return (
    props.messages.map(message=>(
      <div className="row">
        <Message 
          content={message.content}
          subject={message.subject}
        />
      </div>
    ))
  )
}

export default MessageContainer;