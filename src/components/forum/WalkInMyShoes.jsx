import React from 'react';
import NewPostForm from '../../components/forum/NewPostForm'
import messagesService from '../../pages/utils/messagesService'
import PostsList from './PostsList'
import PostDisplay from './PostDisplay'

class WalkInMyShoes extends React.Component {
  constructor() {
    super();
    this.state={
      loading: 'initial',
      posts: [],
      topic: "",
      selectedPost: "none"
    }
  }

  componentDidMount(){
    this.setState({topic: this.props.topic})
    this.update()
  }

  componentDidUpdate(){
    if(this.state.topic!=this.props.topic){
      this.setState({topic: this.props.topic})
      this.update();  
    }
  }

  selectedPostUpdate=(post) => {
    this.setState({selectedPost: post})
  }

  update = async () => {
    this.setState({ loading: 'true' })
    try {
      var postsReturn = await messagesService.getPosts(this.state.topic)
      this.setState({ loading: 'false', posts: postsReturn })
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
    if (this.state.loading === 'false' && this.state.selectedPost==='none')
      return (
        <div className='container'>
          <PostsList title={this.state.topic} posts={this.state.posts} selectedPostUpdate={this.selectedPostUpdate}/>
          <NewPostForm update={this.update} type={this.state.type} topic={this.state.topic} />
        </div>
      )
    if (this.state.loading==='false'&& this.state.selectedPost!=='none'){
        return(<PostDisplay type={this.props.type} topic={this.props.topic} post={this.state.selectedPost}/>)
    }
  }
}

export default WalkInMyShoes;