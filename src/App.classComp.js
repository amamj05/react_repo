import React, {useState} from "react";


//function style component
function FuncComp(){
    return(
        <div>
            <h2>function style component</h2>
        </div>
    )
}

//function style, props
function FuncComp1(props){
    return(
        <div>
            <h2>function style component</h2>
            <p>Number : {props.initNumber}</p>
        </div>
    )
}


//class style component
class ClassComp extends React.Component{
    render(){
        return(
            <div>
                <h2>class style component</h2>
            </div>
        )
    }
}

//class style, props
class ClassComp1 extends React.Component{
    render(){
        return(
            <div>
                <h2>class style component</h2>
                <p>Number : {this.props.initNumber}</p>
            </div>
        )
    }
}



// class style, state
class ClassComp2 extends React.Component{
    state = {number : this.props.initNumber}
    
    render(){
        return(
            <div>
                <h2>class style component</h2>
                <p>Number : {this.state.number}</p>
                <input type="button" value="random" onClick={
                    function(){
                    this.setState({number: Math.random()})
                }.bind(this)
                }></input>
            </div>
        )
    }
}


// function style, useState 
// import {useState} from "react";
function FuncComp3(props){
    var numberState = useState(props.initNumber);
    var number = numberState[0];
    return(
        <div>
            <h2>function style component</h2>
            <p>Number : {number}</p>
        </div>
    )
}

// function style, useState, random
function FuncComp4(props){
    var numberState = useState(props.initNumber);
    var number = numberState[0];
    var setNumber = numberState[1];
    return(
        <div>
        <h2>function style component</h2>
        <p>Number : {number}</p>
        <input type="button" value="random" onClick={
            function(){
                setNumber(Math.random())
        }
        }></input>
    </div>
    )
}


function App(){
    return (
        <div>
            <h1>Hello</h1>
            <FuncComp4 initNumber={2}></FuncComp4>
            <ClassComp2 initNumber={2}></ClassComp2>
        </div>
    )
}


export default App;