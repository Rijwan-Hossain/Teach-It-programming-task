import React, { Component } from 'react'

class OneTodo extends Component { 
    state = {
        ischecked: false
    } 

    checkListener = (id) => { 
        this.setState({ 
            isChecked: true 
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

                <button 
                    style={{ 
                        marginLeft: 'auto', 
                        marginBottom: '5px' 
                    }} 
                > 
                    update 
                </button> 

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