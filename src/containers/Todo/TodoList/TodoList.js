import React from 'react';

import classes from './TodoList.scss';

const TodoList = (props) => (
    <div className={classes.TodoList}>TodoList  
        <div className={classes.TodoItem}>_ item1
            <div className={classes.ItemLabel}>_ ItemLabel</div>
            <div className={classes.Controls}>
                <button type="submit" value="Edit" className={classes.EditButton}>Edit</button>
                <button type="submit" value="Delete" className={classes.DeleteButton}>Delete</button>
            </div>
        </div>
        <div className={classes.TodoItem}>_ item2
        </div>
    </div>
);

export default TodoList;