import React, { Component } from 'react';
import axios from '../../axios-data';
import { db } from '../../firebase';

import classes from './Todo.scss';

import TodoSearch from '../../components/Todo/TodoSearch/TodoSearch';
import TodoList from '../../components/Todo/TodoList/TodoList';
import EditModal from '../../components/Todo/TodoList/EditModal/EditModal';

class Todo extends Component {
    state = {
        todolist:[],
        newpost: '',
        updatedId: '',
        updatedpost: '',
        displayModal: false
        
    }

    componentDidMount () {
        this.fetchAll();
    }
    
    //GET
    fetchAll = () => {
        return axios.get( '/todolist.json')
        .then( res => {
            const fetchedList = [];
            for ( let key in res.data ) {
                fetchedList.push( {
                    ...res.data[key],
                    id: key
                } );
            }
            this.setState( {
               todolist: fetchedList
            });
        } )
        .catch( err => {
            console.log('get: '+err);
        } );
    }
  
    //DELETE
    todoDelete = (itemid) => {  
        return db.doDeleteItem(itemid)
                .then(res => {
                    console.log(res)
                    return this.fetchAll()});
    }

    //POST
    todoAdd = (event) => {
        event.preventDefault();

        const order = {
            text: this.state.newpost,
            date: new Date().getTime()
        }
    
        axios.post( '/todolist.json', order )
            .then( response => {
                console.log(response);
                return this.fetchAll();
                //this.setState({ loading: false, purchasing: false });
            } )
            .catch( error => {
                console.log(error);
                //this.setState({ loading: false, purchasing: false });
            } );
        
        this.setState({
            newpost: ''
        });
       // this.scrollToBottom();
        
    }

    inputChangedHandler = (event) => {
        this.setState({
            newpost: event.target.value
        });
    }
    

    //UPDATE
    
    todoUpdate = (updatedId, updatedText) => { 
        console.log(updatedId) ;
        return db.doUpdateItem(updatedId, updatedText)
                .then(res => {
                    console.log(res);
                    this.fetchAll();
                    this.cancelModal();
                });
    }
    
    updateModal = (itemid) =>{
        //const updateditem = this.todolist.find(each => each.id === itemid); 
        //this.setState({updatedpost: updateditem.text, updatedId: itemid});
        this.setState({
            displayModal: true,
            updatedId: itemid
        });
    }

    cancelModal = ()=>{
        this.setState({
            updatedId: '',
            updatedpost: '',
            displayModal: false
        });
    }

    updateChangedHandler = (event) => {
        this.setState({
            updatedpost: event.target.value
        });
    }


    // scrollToBottom = () => {//fix it
    //     var el = this.refs.wrap;
    //     el.scrollTop = el.scrollHeight;
    // };

    render () {
        return (
            <div className={classes.Todo}>
                <div className={classes.TodoLabel}>
                    <h1>
                        <span className={classes.TodoSpanOne}>TODO</span>
                        <span className={classes.TodoSpanTwo}>s</span>
                    </h1>
                </div>
                <div className={classes.TodoSearch}>
                    <TodoSearch propedtodoAdd={this.todoAdd}
                                propedinputChangedHandler={this.inputChangedHandler}
                                propedvalue={this.state.newpost} />
                </div>
                <div className={classes.EditModal}
                     style={{
                     transform: this.state.displayModal ? 'translateY(0)' : 'translateY(-100vh)',
                     opacity: this.state.displayModal ? '1' : '0'}}>
                    <EditModal propedtodoUpdate={()=>this.todoUpdate(this.state.updatedId, this.state.updatedpost)}
                               propedupdateChangedHandler={this.updateChangedHandler}
                               propedvalue={this.state.updatedpost}
                               propedcancelModal={this.cancelModal}/>
                </div> 
                <div className={classes.TodoList}> 
                    <TodoList propedtodolist={this.state.todolist}
                              propedtodoDelete={this.todoDelete}
                              propedtodoUpdate={this.todoUpdate}
                              propedupdateModal={this.updateModal}/>
                </div>
            </div>
        );
    }
}

export default Todo;