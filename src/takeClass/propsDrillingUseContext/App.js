import { createContext, useContext } from "react";

const CountContext = createContext();

const CountProvider = ({children})=>{
    const [count, setCount] = useState(0);
    const increment= ()=>{
        setCount((prevCount)=>{prevCount+1});
    }
    return(
        <CountContext.Provider value={{count, increment}}> 
            {children}
        </CountContext.Provider>
    )
}

const useCount = ()=> useContext(CountContext);

function Level1(){
    const {increment} = useCount();
    return(
        <div style={{border:"1px solid black", padding:"10px"}}>
        <h3>Level1</h3>
        <Level2/>

    </div>
    )
}

function Level2(){
    return(
        <div style={{border:"1px solid black", padding:"10px"}}>
            <h3>Level2</h3>
            <Level3/>

        </div>
    )
}

function Level3(){
    return(
        <div style={{border:"1px solid black", padding:"10px"}}>
            <h3>Level3</h3>
            <Level4/>

        </div>
    )
}

function Level4(){
    return(
        <div style={{border:"1px solid black", padding:"10px"}}>
            <h3>Level4</h3>
            <Level5/>

        </div>
    )
}

function Level5(){
    const {count} = useCount();
    return(
        <div>
            <div style={{border:"1px solid black", padding:"10px"}}></div>
            <h3>Level5</h3>
            <p>Count : {count}</p>

        
        </div>
    )
}

export default function App(){
    return(
        <CountProvider>
            <div>
                <h2>Top Level1: Context API</h2>
                <Level1/>
            </div>
        </CountProvider>
    )
}