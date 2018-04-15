import React from 'react';

import classes from './TodoSearch.scss';

const TodoSearch = (props) => (
    <form //onSubmit={this.props.send} //have to define
        className={classes.TodoSearch}>  
        <input type="text" value="Task" className={classes.TextBox}/>
        <button type="submit" value="Add" className={classes.AddButton}>Add</button>
    </form>
);

export default TodoSearch;