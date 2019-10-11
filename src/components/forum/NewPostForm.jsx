import React from 'react';
import messagesService from '../../pages/utils/messagesService'

class NewPostForm extends React.Component {
  constructor() {
    super();
    this.state = {
      subject: "",
      content: "",
      type: "",
      topic: ""
    }
  }

  componentDidMount() {
    this.setState({
      type:this.props.type,
      topic: this.props.topic
      })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  formSubmit= async (e) => {
    e.preventDefault()
    await messagesService.newPost(this.state);
    this.setState({
      subject: "",
      content: "",
    })
    this.props.update();
  }

  render() {

    return (
      <form onSubmit={this.formSubmit}>
        <fieldset>
          <legend>New Post</legend>
          <div class="form-group row">
            <label for="subject" class="col-sm-2 col-form-label">Subject:</label>
            <div class="col-sm-10">
              <input onChange={this.handleChange} value={this.state.subject} name="subject" type="text" class="form-control-plaintext" id="subject" />
            </div>
          </div>
          <div class="form-group">
            <label for="message">Message: </label>
            <textarea class="form-control" id="message" name="content" onChange={this.handleChange} value={this.state.content} rows="3"></textarea>
          </div>
          <button class="btn btn-primary">Submit</button>
        </fieldset>
      </form>
    )
  }
}

export default NewPostForm;