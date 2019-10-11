import React from 'react';
import NewPostForm from '../../components/forum/NewPostForm'
import './PostsList.css'
import { Link } from 'react-router-dom'

class PostsList extends React.Component {
  constructor(){
    super();
    this.state={
      posts: [],
      title: "",
    }
  }

  componentDidMount(){
    this.setState({title: this.props.title, posts:this.props.posts})
  }

  componentDidUpdate() {
    if(this.state.posts != this.props.posts){
      this.setState({title: this.props.title, posts:this.props.posts})
    }
  }

  

  render() {
    if (!this.state.posts) { return <div>No Posts Yet</div> }
    return (
 
      <table class="table table-hover poststable">
        <thead>
          <tr>
            <th scope="col">{this.state.title}</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {this.state.posts.map(post => (
            <tr onClick={()=>this.props.selectedPostUpdate(post)} class="table-active">
              <th scope="row"> {post.subject}</th>
              <td>{post.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
      

    )
  }
}

export default PostsList;