import produce from "immer";
const initialState=[];

const nextTodoId = (draft) =>{
    const maxId = draft.reduce((maxId, todo)=> Math.max(todo.id, maxId), -1)
    return maxId + 1
}

const TodoReducer = (state = initialState , action ) =>{
    switch(action.type){
        case 'DELETE_REVIEW':
            return produce(state, draft=>{
                return draft.filter((ele)=>ele.id !== action.payload)
            })
        case 'ADD_REVIEW':
            return produce(state, draft=>{
                draft.push(
                    {
                        id: nextTodoId(draft),
                        firstName:action.firstName,
                        lastName:action.lastName,
                        message:action.message,
                        rating:action.rating

                    }
                )
            })
            
        
        default:
            return state;
    }
}
export default TodoReducer