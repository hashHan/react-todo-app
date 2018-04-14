import React, { Component } from 'react';
import Github from 'react-icons/lib/fa/github'

import classes from './App.scss';

import Todo from './containers/Todo/Todo';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
          <div className={classes.AppTriangle}></div>
          <Github className={classes.AppLogo}/>
          <Todo className={classes.Todo}/>  
      </div>
    );
  }
}

export default App;
