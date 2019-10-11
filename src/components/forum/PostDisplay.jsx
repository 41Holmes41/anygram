import React from 'react';
import './PostsList.css'
import { Link } from 'react-router-dom'
import messagesService from '../../pages/utils/messagesService'
import NewMessageForm from '../forum/messages/NewMessageForm'
import MessageContainer from './messages/MessageContainer'

class PostDisplay extends React.Component {

  constructor() {
    super();
    this.state = {
      loading: 'initial',
      type: "",
      topic:"",
      post: {}
    }
  }

  componentDidMount(){
    this.update();
    this.setState({
      type: this.props.type,
      topic: this.props.topic,
      post: this.props.post,
    })
  }


     update = async () => {
      this.setState({ loading: 'true' })
      try {
        var messageReturn = await messagesService.getMessages(this.props.post._id)
        this.setState({ loading: 'false', messages: messageReturn.messages })
      } catch (err) {
        console.log("error at app.js- messageReturn", err)
      } 
    } 

  render() {
    if (this.state.loading === 'initial') {
      return <h2>Intializing...</h2>;
    }
    if (this.state.loading === 'true') {
      return <h2>Loading...</h2>;
    }
    return (
      <div class="container">
        <div class="card bg-light mb-3">
          <div class="card-header">Post</div>
          <div class="card-body">
            <h4 class="card-title">{this.state.post.subject}</h4>
            <p class="card-text">{this.state.post.content}</p>
          </div>
        </div>
        <MessageContainer messages={this.state.messages}/>
        <NewMessageForm update={this.update} type={this.state.type} topic={this.state.topic} post={this.state.post}/>
      </div>
    )
  }
}

export default PostDisplay;