import React, { Component } from 'react'
import './App.css'
import IdeasContainer from './components/IdeasContainer'
import {Navbar, Container} from 'react-bootstrap';
import BoardTitle from './components/BoardTitle'
import Notification from './components/Notification'
import $ from 'jquery';



class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      TrasitionIn: false,
      notification: ''
    }
    this.setTransitionIn = this.setTransitionIn.bind(this)
    // this.resetNotification = this.resetNotification.bind(this)
  }

  setTransitionIn = (e) => {
    this.setState({transisitonIn: e})
  }


  resetNotification = () => { 
    this.setTransitionIn(false)
    this.setState({notification: ''})
  }


  render() {
    return (

      <div className="App">
      
      <Navbar expand="lg" variant="light" bg="light">
      <Container>
     <Navbar.Brand href="/" className="navbar">IDEADOCS</Navbar.Brand>
     <div className="notification">
    <Notification in={this.state.transisitonIn} notification={this.state.notification} />
      </div>
      </Container>
      </Navbar>
      <div className="title-container">
      </div>
      <BoardTitle />
      <div className="App-header">
      </div>
     <IdeasContainer onChange={notification => {
      console.log('notification', notification);
      this.setState({ notification })
    }} setTransitionIn = {this.setTransitionIn}  resetNotification={this.resetNotification}/>

      </div>
    )
  }
}

export default App