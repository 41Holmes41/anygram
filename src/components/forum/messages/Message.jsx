import React from 'react';

const Message = (props) => {

  return (
    <div className="container">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">{props.subject}</h4>
        <h6 class="card-subtitle mb-2 text-muted">By Bob Joe</h6>
        <p class="card-text">{props.content}</p>
      </div>
    </div>
    </div>
  )
}

export default Message;