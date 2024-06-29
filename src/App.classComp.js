import React, { useState } from "react";


//function style component
function FuncComp() {
    return (
        <div>
            <h2>function style component</h2>
        </div>
    )
}

//function style, props
function FuncComp1(props) {
    return (
        <div>
            <h2>function style component</h2>
            <p>Number : {props.initNumber}</p>
        </div>
    )
}


//class style component
class ClassComp extends React.Component {
    render() {
        return (
            <div>
                <h2>class style component</h2>
            </div>
        )
    }
}

//class style, props
class ClassComp1 extends React.Component {
    render() {
        return (
            <div>
                <h2>class style component</h2>
                <p>Number : {this.props.initNumber}</p>
            </div>
        )
    }
}



// class style, state
class ClassComp2 extends React.Component {
    state = { number: this.props.initNumber }

    render() {
        return (
            <div>
                <h2>class style component</h2>
                <p>Number : {this.state.number}</p>
                <input type="button" value="random" onClick={
                    function () {
                        this.setState({ number: Math.random() })
                    }.bind(this)
                }></input>
            </div>
        )
    }
}


// function style, useState 
// import {useState} from "react";
function FuncComp3(props) {
    var numberState = useState(props.initNumber);
    var number = numberState[0];
    return (
        <div>
            <h2>function style component</h2>
            <p>Number : {number}</p>
        </div>
    )
}

// function style, useState, random
function FuncComp4(props) {
    var numberState = useState(props.initNumber);
    var number = numberState[0];
    var setNumber = numberState[1];
    return (
        <div>
            <h2>function style component</h2>
            <p>Number : {number}</p>
            <input type="button" value="random" onClick={
                function () {
                    setNumber(Math.random())
                }
            }></input>
        </div>
    )
}

// class style, state, DATE
class ClassComp3 extends React.Component {
    state = {
        number: this.props.initNumber,
        date: (new Date()).toString()
    }

    render() {
        return (
            <div>
                <h2>class style component</h2>

                <p>Number : {this.state.number}</p>
                <p>date : {this.state.date}</p>

                <input type="button" value="random" onClick={
                    function () {
                        this.setState({ number: Math.random() })
                    }.bind(this)}></input>

                <input type="button" value="date" onClick={
                    function () {
                        this.setState({ date: (new Date()).toString() })
                    }.bind(this)}></input>

            </div>
        )
    }
}

// function style, useState, DATE
function FuncComp5(props) {
    var numberState = useState(props.initNumber);
    var number = numberState[0];
    var setNumber = numberState[1];
    
    const [_Date, setDate] = useState((new Date()).toString());

    return (
        <div>
            <h2>function style component</h2>

            <p>Number : {number}</p>
            <p>DATE : {_Date}</p>

            <input type="button" value="random" onClick={
                function () {
                    setNumber(Math.random())}
            }></input>

            <input type="button" value="Date" onClick={
                function () {
                    setDate((new Date()).toString())}
            }></input>
        </div>
    )
}

// class style, 라이프 사이클
class ClassComp4 extends React.Component {
    state = {
        number: this.props.initNumber,
        date: (new Date()).toString()
    }

    //페이지 로드 될때
    componentWillMount(){ console.log("componentWillMount 호출") }
    componentDidMount(){ console.log("componentDidMount 호출") }

    //리렌더링 될때
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate 호출");
        return true;
    }
    componentWillUpdate(nextProps, nextState){console.log("componentWillUpdate 호출");}
    componentDidUpdate(nextProps, nextState){console.log("componentDidUpdate 호출");}

    render() {
        console.log("render 호출");
        
        return (
            <div>
                <h2>class style component</h2>

                <p>Number : {this.state.number}</p>
                <p>date : {this.state.date}</p>

                <input type="button" value="random" onClick={
                    function () {
                        this.setState({ number: Math.random() })
                    }.bind(this)}></input>

                <input type="button" value="date" onClick={
                    function () {
                        this.setState({ date: (new Date()).toString() })
                    }.bind(this)}></input>

            </div>
        )
    }
}

function App() {
    return (
        <div>
            <h1>Hello</h1>
            <FuncComp5 initNumber={2}></FuncComp5>
            <ClassComp4 initNumber={2}></ClassComp4>
        </div>
    )
}


export default App;



//페이지 로드 될때
//    componentWillMount
//    render
//    componentDidMount

   
//리렌더링 될때
//    shouldComponentUpdate =>  return true || false
//    componentWillUpdate
//    render
//    componentDidUpdate

