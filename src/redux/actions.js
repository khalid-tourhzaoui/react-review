export const addReview=(firstName,lastName,message,rating)=>{
    return{
        type: 'ADD_REVIEW',
        firstName,lastName,message,rating
    }
}

export const deleteAll = () =>{
    return{
        type: 'DELETE_ALL'
    }
}

export const removeReview=(payload)=>{
    return{
        type: 'DELETE_REVIEW',
        payload
    }
}
