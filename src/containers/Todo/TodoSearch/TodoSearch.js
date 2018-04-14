import React from 'react';

import classes from './TodoSearch.scss';

const TodoSearch = (props) => (
    <div className={classes.TodoSearch}>search bar  
        <div className={classes.TextBox}>_ text box</div>
        <div className={classes.AddButton}>_ button</div>
    </div>
);

export default TodoSearch;