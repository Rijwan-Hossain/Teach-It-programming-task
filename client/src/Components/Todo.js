import React, { Component } from 'react'
import CreateTodo from './Left/CreateTodo'
import ShowTodo from './Left/ShowTodo'

class Todo extends Component {
    render() {
        return (
            <div style={{display: 'flex'}}> 
                <div style={{width: '50%'}}> 
                    <h3 style={{textAlign: 'center'}}> 
                        Create Todo 
                    </h3> 
                    <CreateTodo /> 
                    <ShowTodo /> 
                </div> 

                <div style={{width: '50%', textAlign: 'center'}}> 
                    <h3>Fetched data from JSONPlaceholder</h3> 

                </div>
            </div>
        )
    }
}

export default Todo;