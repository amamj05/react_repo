import React,{useState} from "react";
import Todos from "./Todos";

const CountUp = ()=>{
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = ()=>{setCount((c)=>c+1)};
    const addTodos = ()=>{setTodos(((t)=>[...t, "New todo"]))}

    return(
        <article>
            <p>No-useCallBack</p>
            <Todos todos={todos} addTodo={addTodo}/>
            <div>
                <div>Coint; {count}</div>
                <button onClick={increment}> + </button>
            </div>
        </article>
    )
};


export default CountUp;