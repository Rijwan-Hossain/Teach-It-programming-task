import React, { Component } from 'react'
import CreateTodo from './Todo/CreateTodo'
import ShowTodo from './Todo/ShowTodo'

class Todo extends Component { 
    render() { 
        return ( 
            <div> 
                <div style={{minHeight: '300px', width: '60%'}}> 
                    <h3 style={{textAlign: 'center'}}> 
                        Create Todo 
                    </h3> 
                    <CreateTodo /> 
                    <ShowTodo /> 
                </div> 

                <div> 
                    <h3 style={{textAlign: 'center', marginTop: '100px'}}> 
                        Fetched data from JSONPlaceholder
                    </h3>  
                    <p>Sorry...!</p>
                    <p>Can't did it, for the lack of time. </p>
                </div>
            </div>
        )
    }
}

export default Todo;