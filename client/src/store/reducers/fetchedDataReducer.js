
const fetchedDataReducer = (state = [], action) => {
    switch(action.type) { 
        case 'GET_LIST': { 
            const todos = state.concat(...action.payload) 
            return todos 
        } 
        default: { 
            return state 
        } 
    } 
} 

export default fetchedDataReducer; 
