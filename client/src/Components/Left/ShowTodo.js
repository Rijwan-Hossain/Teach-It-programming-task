import React, { Component } from 'react' 
import { connect } from 'react-redux' 
import OneTodo from './OneTodo'

class ShowTodo extends Component { 
    checkbox = (id) => { 
        this.props.checkTodo(id) 
    } 

    delete = (id) => { 
        this.props.delete(id); 
    } 

    update = (todo) => { 
        this.props.update(todo) 
    } 

    render() { 
        console.log(this.props.todos); 
        let { todos } = this.props; 
        return ( 
            <div style={{marginLeft: '20px'}}> 
                <h4>All Todos</h4> 
                <ul> 
                { 
                    todos.map(todo => { 
                        return( 
                            <OneTodo 
                                key={todo.id} 
                                checkbox={this.checkbox}
                                delete={this.delete}
                                update={this.update}
                                todo={todo} /> 
                        ) 
                    }) 
                } 
                </ul> 
            </div> 
        ) 
    } 
} 

const mapStateToProps = (state) => ({ 
    todos: state.todos 
}) 

const mapDispatchToProps = (dispatch) => ({ 
    checkTodo: (id) => dispatch({type: 'CHECK_TODO', payload: id}), 
    delete: (id) => dispatch({type: 'DELETE_TODO', payload: id}), 
    update: (todo) => dispatch({type: 'UPDATE_TODO', payload: todo})
}) 

export default connect(mapStateToProps, mapDispatchToProps)(ShowTodo); 

