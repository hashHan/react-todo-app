import React, { Component } from 'react';
import axios from '../../../axios-data';
import classes from './TodoSearch.scss';

class TodoSearch extends Component {
    state = {
        newpost: ''
    }

    todoAdded = (event) => {
        event.preventDefault();

        const order = {
            text: this.state.newpost,
            date: new Date().getTime()
        }
    
        axios.post( '/todolist.json', order )
            .then( response => {
                console.log(response);
                //this.setState({ loading: false, purchasing: false });
            } )
            .catch( error => {
                console.log(error);
                //this.setState({ loading: false, purchasing: false });
            } );
        
        this.setState({newpost: ''});
        
    }

    inputChangedHandler = (event) => {
        this.setState({newpost: event.target.value});
    }

    render () {
        return(
            <form onSubmit={this.todoAdded}
                className={classes.TodoSearch}>  
                <input 
                    className={classes.TextBox}
                    type="text" 
                    placeholder="write your post"
                    value={this.state.newpost} //state
                    onChange={this.inputChangedHandler}/>
                <button //type="submit"        
                    className={classes.AddButton}>Add</button>
            </form>
        );
    }
}

   


    

export default TodoSearch;