import React from 'react';
import { Link } from 'react-router-dom'
import './ForumPage.css'

class ForumPage extends React.Component {

  

  render() {
    return (
      <div className="wrapper">
        <div className="bg-dark forums text-light">Forums</div>
        <Link to="type1forum"><div className="bg-success type1 text-light">The Reformer</div></Link>
        <div className="bg-danger type2 text-light">The Helper</div>
        <div className="bg-info text-light type3">The Achiever</div>
        <div className="bg-warning type4 text-light ">The Individualist</div>
        <div className="bg-primary type5 text-light ">The Investigator</div>
        <div className="bg-secondary type6 text-light disabled">The Loyalist</div>
        <div className="bg-danger type7 text-light disabled">The Enthusiast</div>
        <div className="bg-info type8 text-light disabled">The Challenger</div>
        <div className="bg-warning type9 text-light disabled">The Peacemaker</div>
        <Link to="/"><div className="bg-dark home text-light">Home</div></Link>
      </div>
    );
  }
}

export default ForumPage



{/* <div className="container">
        <NewMessageForm update={this.update}/>
        <MessageContainer messages={this.state.messages}/>
      </div> */}