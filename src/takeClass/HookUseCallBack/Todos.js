import {meno} from "react";

const Todos = ({todos, addTodo})=>{
    console.log("Todos 랜더링....")
    return(
        <div>
            <h3>My Todos</h3>
            <button onClick={addTodo}>ADD-todo</button>
            {todos.map((todo,index)=>{
                return(
                    <p key={index}>{todo}</p>
                )
            })}
        </div>
    )
};


export default memo(Todos);