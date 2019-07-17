import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <Switch>
            <Route
              path='/'
              component={Homepage}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
