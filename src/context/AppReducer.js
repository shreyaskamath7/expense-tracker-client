export  const AppReducer= (state,action)=>{
    switch(action.type){
        case('DELETE_TRANSACTION'):
            return{
                ...state,
                transactions:state.transactions.filter(transaction=> transaction._id!==action.payload)
            }
        case('ADD_TRANSACTION'):
        return{
            ...state,
            error:null,
            transactions:[...state.transactions,action.payload]
        }
        case('GET_TRANSACTION'):
        return{
            ...state,
            loading:false,
            transactions:action.payload
        }
        case('TRANSACTION_ERROR'):
        return{
            ...state,
            error:action.payload
        }
        default:return state;
    }

}