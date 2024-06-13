import React, {useReducer} from "react";

const initialSate = {count : 0};
function reducer(state, action){
    switch(action.type){
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count:state.count - 1}
            default:
                throw new Error();
    }
}

function Counter(){
    const [state, dispatch] = useReducer(reducer, initialSate);
    return(
<div>
{/* 안보임 */}
</div>
    )
}