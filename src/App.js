import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Github from 'react-icons/lib/fa/github';
import classes from './App.scss';

import Todo from './containers/Todo/Todo';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className={classes.App}>
            <div className={classes.AppTriangle}></div>
            <Github className={classes.AppLogo}/>
            <Todo className={classes.Todo}/>  
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
