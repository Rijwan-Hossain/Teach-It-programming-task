import React, { Component } from 'react'
import Popup from 'reactjs-popup' 

class OneTodo extends Component { 
    state = { 
        ischecked: false, 
        editTask: this.props.todo.task  
    } 

    checkListener = (id) => { 
        this.setState({ 
            isChecked: true 
        }) 
    } 


    editHandler = (e) => { 
        this.setState({ 
            [e.target.name]: e.target.value 
        }) 
    } 

    render() { 
        return ( 
            <li style={{ 
                listStyle: 'none',  
                display: 'flex', 
                borderBottom: '1px solid', 
                paddingTop: '15px'
            }}> 
                
                <input type="checkbox" 
                    name="todo" 
                    value={this.props.todo.task} 
                    onClick={() => this.props.checkbox(this.props.todo.id)} 
                    className="my-1 mx-3"  
                /> 
                
                { 
                    this.props.todo.isComplete 
                    ? 
                        <p style={{ 
                            textDecoration: 'line-through', 
                            marginTop: '-2px'
                        }}> 
                            {this.props.todo.task}
                        </p> 
                    : 
                        <p style={{marginTop: '-2px'}}> 
                            {this.props.todo.task} 
                        </p> 
                } 

                <Popup 
                    trigger={ 
                        <button style={{ 
                            marginLeft: 'auto', 
                            marginBottom: '5px' 
                        }}> 
                        Update 
                        </button> 
                    } 
                    position="right center"> 
                    <div> 
                        <input 
                            type="text" 
                            name='editTask' 
                            style={{ 
                                margin: '10px', 
                                padding: '8px' 
                            }}
                            value={this.state.editTask} 
                            onChange={this.editHandler} 
                        /> 
                        <button 
                            style={{
                                marginLeft: '10px'
                            }}
                            onClick={ 
                                () => 
                                    this.props.update({ 
                                        ...this.props.todo, 
                                        task: this.state.editTask
                                    }) 
                            }> 
                            Send 
                        </button> 
                    </div> 
                </Popup> 

                <button 
                    onClick={() => this.props.delete(this.props.todo.id)} 
                    style={{ 
                        marginBottom: '5px', 
                        marginLeft: '5px'
                    }} 
                > 
                    Delete 
                </button> 
            </li> 
        ) 
    } 
} 


export default OneTodo; 