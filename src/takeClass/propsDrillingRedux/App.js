import React from "react";
import {createStrore} from 'redux';
import {Provider, connect} from "react-redux";
import reducer, {increment} from './reducer';


const mapProps = state =>{return{value:state.count}};
const mapDispatch = {increment};


const Level5 = ({value})=>{
    return(
        <div style={{border:"1px solid black", padding:"10px"}}>
        <h3>Level5 ; {value}</h3>
          </div>
    )
}
const Level5Connected = connect(mapProps)(Level5); 

const Level3 = ()=>{
    return(
        <div style={{border:"1px solid black", padding:"10px"}}>
            <h3>Level3</h3>
            <Level4/>

        </div>
    )
}

const Level4 = ()=>{
    return(
        <div style={{border:"1px solid black", padding:"10px"}}>
            <h3>Level4</h3>
            <Level5/>

        </div>
    )
}

const Level2 = ()=>{
    return(
        <div style={{border:"1px solid black", padding:"10px"}}>
            <h2>Level2</h2>
            <Level3/>
        </div>
    )
}




const Level1 = ({value, increment})=>{
    return(
        <div style={{border:"1px solid black", padding:"10px"}}>
            <h2>Level1</h2>
            <div>Value: {value}</div>
            <button onClick={increment}> + </button>
            <Level2/>
        </div>
    )
}
const Level1Connected = connect(mapProps, mapDispatch)(Level1);  //전역변수 연결??? 이거 무슨 문법임?
const store = createStrore(reducer);

const App = ()=>{
    return (
        <Provider store={store}>
            <div>
                <h2>props drilling - redux</h2>
                {/* <NextLevel/> */}
                <Level1Connected/>
            </div>
        </Provider>
    )
}

export default App;