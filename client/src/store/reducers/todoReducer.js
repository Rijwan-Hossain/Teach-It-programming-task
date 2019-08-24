

const todoReducer = (state = [], action) => { 
    switch(action.type) { 
        case 'ADD_TODO': { 
            let todos = state.concat(action.payload) 
            return todos; 
        } 
        default: { 
            return state; 
        } 
    } 
} 

export default todoReducer; 

