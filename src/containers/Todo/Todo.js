import React, { Component } from 'react';
import classes from './Todo.scss';

import TodoSearch from './TodoSearch/TodoSearch';
import TodoList from './TodoList/TodoList';

class Todo extends Component {
    state = {
    
    }

    render () {
        return (
            <div className={classes.Todo}>
                <div className={classes.TodoLabel}>
                    <h1>
                        <span className={classes.TodoSpanOne}>TODO</span>
                        <span className={classes.TodoSpanTwo}>s</span>
                    </h1>
                </div>
                <div className={classes.TodoSearch}><TodoSearch /></div>
                <div className={classes.TodoList}> <TodoList/></div>
            </div>
        );
    }
}

export default Todo;