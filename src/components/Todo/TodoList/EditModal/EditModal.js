import React from 'react';

import classes from './EditModal.scss';

const EditModal = (props) => {

    return(
        <div //onSubmit={props.propedtodoUpdate}
            className={classes.TodoEdit}>  
            <input 
                className={classes.TextBox}
                type="text" 
                placeholder="Edit your post"
                value={props.propedvalue} //state
                onChange={props.propedupdateChangedHandler}/>
            <button type="button"         
                className={classes.EditButton}
                onClick={props.propedtodoUpdate}>Edit</button>
            <button
                type="button"        
                className={classes.CancelButton}
                onClick={props.propedcancelModal}>Cancel</button>
        </div>
    );

}

export default EditModal;