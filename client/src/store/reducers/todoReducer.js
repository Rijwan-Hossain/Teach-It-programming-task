

const todoReducer = (state = [], action) => { 
    switch(action.type) { 
        case 'ADD_TODO': { 
            let todos = state.concat(action.payload) 
            return todos; 
        } 
        case 'CHECK_TODO': { 
            let todos = state.map(todo => { 
                if(todo.id === action.payload) { 
                    todo.isComplete = !todo.isComplete 
                    return todo 
                } 
                return todo 
            }) 
            return todos 
        } 
        case 'UPDATE_TODO': { 
            console.log('action.payload');
            console.log(action.payload);
            
            let todos = state.map(todo => { 
                if(todo.id === action.payload.id) { 
                    return action.payload 
                } 
                return todo 
            }) 
            return todos 
        } 
        case 'DELETE_TODO': { 
            let todos = state.filter(todo => { 
                if(todo.id !== action.payload) { 
                    return todo 
                } 
            }) 
            return todos 
        } 
        default: { 
            return state; 
        } 
    } 
} 

export default todoReducer; 

