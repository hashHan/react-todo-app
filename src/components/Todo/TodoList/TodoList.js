import React from 'react';

import classes from './TodoList.scss';

const TodoList = (props) => {
   
    let arraycomponent = null;
    if(props.propedtodolist[0]){
        arraycomponent = props.propedtodolist.map(each => (
            <div className={classes.TodoItem}
                 key={each.id}>
                <div className={classes.ItemLabel}>{each.text}</div>
                <div className={classes.Controls}>
                    <button type="button" 
                            value="Edit" 
                            className={classes.EditButton}
                            onClick={()=>props.propedupdateModal(each.id)} //display modal to update the content
                            >Edit</button>
                    <button type="button" 
                            value="Delete" 
                            className={classes.DeleteButton}
                            onClick={()=>props.propedtodoDelete(each.id)}>Delete</button>
                </div>
            </div>
        ));
    }
    
    return (
        <div className={classes.TodoList}>       
            {arraycomponent}
        </div>
    );
}
export default TodoList;