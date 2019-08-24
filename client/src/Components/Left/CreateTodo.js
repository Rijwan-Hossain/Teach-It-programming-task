import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux' 
import uuid from 'uuid/v1'

class CreateTodo extends Component { 
    state = { 
        task: null 
    } 

    changeHandler = (e) => { 
        this.setState({ 
            [e.target.name]: e.target.value 
        }) 
    } 

    submitHandler = (e) => { 
        e.preventDefault(); 
        let todo = { 
            task: this.state.task, 
            id: uuid(), 
            isComplete: false 
        } 
        this.props.add(todo); 
    } 

    render() { 
        return ( 
            <div> 
                <form 
                    onSubmit={this.submitHandler} 
                    style={{marginLeft: '50px'}}>
                    <input 
                        type="text" 
                        name='task' 
                        style={{
                            padding: '8px', 
                            width: '60%', 
                            marginBottom: '5px'
                        }}
                        value={this.state.value} 
                        placeholder="Enter a task" 
                        onChange={this.changeHandler} 
                    />  
                    <button 
                        style={{
                            marginLeft: '5px', 
                            padding: '7px 15px',
                            background: 'steelblue', 
                            border: '0px', 
                            fontSize: '20px', 
                            color: 'white'
                        }}> 
                        Submit 
                    </button> 
                </form> 
            </div> 
        ) 
    } 
} 


const mapDispatchToProps = (dispatch) => ({ 
    add: (data) => dispatch({type: 'ADD_TODO', payload: data}) 
})

export default connect(null, mapDispatchToProps)(CreateTodo); 
