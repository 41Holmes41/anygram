import React from 'react';
import './Type1ForumPage.css'
import { Link } from 'react-router-dom'
import messagesService from '../../utils/messagesService'
import WalkInMyShoes from '../../../components/forum/WalkInMyShoes'
import Dating from '../../../components/forum/Dating'
import Relationships from '../../../components/forum/Relationships'
import Careers from '../../../components/forum/Careers'

class Type1ForumPage extends React.Component {

  constructor() {
    super();
    this.state = {
      loading: "initial",
      selectedThread: 0,
    }
  }

  async componentDidMount() {
   
  }

  selectThread = (thread) => {
    this.setState({selectedThread: thread})
  }

 

  render() {

    if (this.state.selectedThread===0) {
      return (
        <div>
          <div onClick={()=>this.selectThread(1)} className="bg-success text-light topic one">Walk In My Shoes</div>
          <div onClick={()=>this.selectThread(2)} className="bg-danger text-light topic two">Dating</div>
          <div onClick={()=>this.selectThread(3)} className="bg-warning text-light topic three">Relationships</div>
          <div onClick={()=>this.selectThread(4)} className="bg-info text-light topic four">Careers</div>
          <Link to="/"><div className="bg-dark text-light topic home1">Home</div></Link>
          <Link to="/forum"><div className="bg-dark text-light topic forum1">Forum</div></Link>
        </div>
      )
    }
    if (this.state.selectedThread===1){
      return (
        <div>
          <div onClick={()=>this.selectThread(1)} className="bg-success text-light topic one">Walk In My Shoes</div>
          <div onClick={()=>this.selectThread(2)} className="bg-danger text-light topic two">Dating</div>
          <div onClick={()=>this.selectThread(3)} className="bg-warning text-light topic three">Relationships</div>
          <div onClick={()=>this.selectThread(4)} className="bg-info text-light topic four">Careers</div>
          <Link to="/"><div className="bg-dark text-light topic home1">Home</div></Link>
          <Link to="/forum"><div className="bg-dark text-light topic forum1">Forum</div></Link>
          <div  className="threadGroup"><WalkInMyShoes type="1" topic="walkinmyshoes" /></div>
        </div>
      )
    }
    if (this.state.selectedThread===2){
      return (
        <div>
          <div onClick={()=>this.selectThread(1)} className="bg-success text-light topic one">Walk In My Shoes</div>
          <div onClick={()=>this.selectThread(2)} className="bg-danger text-light topic two">Dating</div>
          <div onClick={()=>this.selectThread(3)} className="bg-warning text-light topic three">Relationships</div>
          <div onClick={()=>this.selectThread(4)} className="bg-info text-light topic four">Careers</div>
          <Link to="/"><div className="bg-dark text-light topic home1">Home</div></Link>
          <Link to="/forum"><div className="bg-dark text-light topic forum1">Forum</div></Link>
          <div className="threadGroup"><WalkInMyShoes type="1" topic="dating"/></div>
        </div>
      )
    }
    if (this.state.selectedThread===3){
      return (
        <div>
          <div onClick={()=>this.selectThread(1)} className="bg-success text-light topic one">Walk In My Shoes</div>
          <div onClick={()=>this.selectThread(2)} className="bg-danger text-light topic two">Dating</div>
          <div onClick={()=>this.selectThread(3)} className="bg-warning text-light topic three">Relationships</div>
          <div onClick={()=>this.selectThread(4)} className="bg-info text-light topic four">Careers</div>
          <Link to="/"><div className="bg-dark text-light topic home1">Home</div></Link>
          <Link to="/forum"><div className="bg-dark text-light topic forum1">Forum</div></Link>
          <Relationships className="threadGroup"/>
        </div>
      )
    }
    if (this.state.selectedThread===4){
      return (
        <div>
          <div onClick={()=>this.selectThread(1)} className="bg-success text-light topic one">Walk In My Shoes</div>
          <div onClick={()=>this.selectThread(2)} className="bg-danger text-light topic two">Dating</div>
          <div onClick={()=>this.selectThread(3)} className="bg-warning text-light topic three">Relationships</div>
          <div onClick={()=>this.selectThread(4)} className="bg-info text-light topic four">Careers</div>
          <Link to="/"><div className="bg-dark text-light topic home1">Home</div></Link>
          <Link to="/forum"><div className="bg-dark text-light topic forum1">Forum</div></Link>
          <Careers className="threadGroup"/>
        </div>
      )
    }
 

  }
}

export default Type1ForumPage;