export const increment = ()=>{
    return{
        type:"INCREMENT"
    }
}

const initialSate = {count:0}
 const reducer = (state=initialSate, action)=>{
    switch (action.type){
        case "INCREMENT":
            return{...state, count:state.count+1}
            default: return state;
    }
}

export default reducer;