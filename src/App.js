import React, { Component } from 'react';
import './App.css';
import Mails from './Mails';
import Create from './Create';
import DetailView from './DetailView';
import { BrowserRouter, Link, Route, Redirect, Switch} from 'react-router-dom';

class App extends Component {
  constructor() {
    super() 
      this.state = {
        currentEmail: {}
      };
  }

  updateEmail(currentEmail) {
    this.setState({ currentEmail });
  }

  render() {
    const { currentEmail } = this.state;

    return (
      <BrowserRouter>
        <div className="App">        
          <div className="heading">
            <div className="title"><Link to='/mails'>List of Mails</Link></div>
            <div className="title"><Link to='/Create'>Create Mail</Link></div>
          </div>              
          <Redirect from='/' to = '/mails'></Redirect>
          <div className="body">
            <Switch>
              <Route path='/mails' component={() => <Mails updateEmail={(email) => this.updateEmail(email)}/>}/>
              <Route path='/Create' component={Create} />
              <Route path='/detail' render={() => <DetailView currentEmail={currentEmail}/>}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
