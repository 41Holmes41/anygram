import React from 'react';
import messagesService from '../../../pages/utils/messagesService'


class NewMessageForm extends React.Component {

  constructor() {
    super();
    this.state= {
      content:"",
      subject:"",
      topic: "",
      type: "",
      post: {}
    }
  }

  componentDidUpdate(){
    if(this.props.topic!=this.state.topic){
    console.log("yoooooo", this.props)
    this.setState({
      topic: this.props.topic,
      type: this.props.type,
      post: this.props.post
    })
  }
  }

  handleInputChange=(e)=>{
    this.setState({[e.target.name]: e.target.value})
  }

  formSubmit=async(e)=>{
    e.preventDefault();
    try {
      await messagesService.newMessage(this.state)
      this.setState({content: "", subject:""})
      this.props.update();
    } catch (err) {
      console.log("error at newmessageform: form submit", err)
    }
  }
  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <fieldset>

          <div className="form-group">
            <label for="subject">Subject</label>
            <input
              className="form-control" 
              id="subject"
              name="subject" 
              onChange={this.handleInputChange}
              value={this.state.subject}
              />
            <label for="content">New Message</label>
            <textarea 
              className="form-control" 
              id="content" 
              rows="3" 
              name="content" 
              onChange={this.handleInputChange}
              value={this.state.content}
            ></textarea>
          </div>

          <button className="btn btn-primary">Reply</button>
        </fieldset>
      </form >
    )
  }
}

export default NewMessageForm;
