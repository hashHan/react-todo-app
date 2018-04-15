import React from 'react';

//import axios from '../../../axios-data';

import classes from './TodoSearch.scss';

const TodoSearch = (props) =>{
    // state = {
    //     newpost: ''
    // }

    // todoAdded = (event) => {
    //     event.preventDefault();

    //     const order = {
    //         text: this.state.newpost,
    //         date: new Date().getTime()
    //     }
    
    //     axios.post( '/todolist.json', order )
    //         .then( response => {
    //             console.log(response);
    //             //this.setState({ loading: false, purchasing: false });
    //         } )
    //         .catch( error => {
    //             console.log(error);
    //             //this.setState({ loading: false, purchasing: false });
    //         } );
        
    //     this.setState({newpost: ''});
        
    // }

    // inputChangedHandler = (event) => {
    //     this.setState({newpost: event.target.value});
    // }

    
        return(
            <form onSubmit={props.propedtodoAdd}
                className={classes.TodoSearch}>  
                <input 
                    className={classes.TextBox}
                    type="text" 
                    placeholder="write your post"
                    value={props.propedvalue} //state
                    onChange={props.propedinputChangedHandler}/>
                <button //type="submit"        
                    className={classes.AddButton}>Add</button>
            </form>
        );
    
}



export default TodoSearch;