import React, { useState, useEffect } from "react";


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
    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate 호출");
        
        //이전 데이터와 지금 데이터를 비교 후 '다를때'만 실행
        if (prevProps.number !== this.state.number){
            document.title = `you clicked ${this.state.number} times`;
        }
    }


    render() { console.log("render 호출");
        
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


// function style, 라이프 사이클
var func6Id = 0;
var func6Style = 'color:blue';

function FuncComp6(props) {
    var numberState = useState(props.initNumber);
    var number = numberState[0];
    var setNumber = numberState[1];
    const [_Date, setDate] = useState((new Date()).toString());

    
    useEffect(()=>{
        document.title = `You clicked ${func6Id} times`;
        console.log("%c useEffect 'A' " + (++func6Id), func6Style);});

    useEffect(()=>{
        console.log("%c useEffect 'B' " + (++func6Id), func6Style);});
        
    console.log("%c render" + (++func6Id), func6Style);
//  render 호출 후에 실행될 코드 => useEffect
//  import {useEffect} from 'react';
//  side effect 줄임말


//  페이지 사라질때?
//  호출 순서는 리렌더링된 직후에 호출됨 
// render18
// useEffect 'return' 'Clean up' 
// useEffect 'A' 19
// useEffect 'B' 20
// useEffect 
    useEffect(()=>{
        console.log("%c useEffect ", func6Style);
       return function(){ console.log("%c useEffect 'return' 'Clean up' " , func6Style);}
       //   <=> componentWillUnmount(){};
    });

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


// function style, useEffect
function FuncComp7(props) {
    var numberState = useState(props.initNumber);
    var number = numberState[0];
    var setNumber = numberState[1];
    const [_Date, setDate] = useState((new Date()).toString());


    //이전 데이터와 지금 데이터를 비교 후 '다를때'만 실행
    useEffect(()=>{
        console.log("%c useEffect 'number' " , func6Style);
        document.title = number;
        return function(){ console.log("%c useEffect 'number return'" , func6Style);}
    }, [number]);
    // [number]가 달라졌을때만 실행

    useEffect(()=>{
        console.log("%c useEffect '_date' " , func6Style);
        document.title = _Date;
        return function(){ console.log("%c useEffect '_Date return'" , func6Style);}
    }, [_Date]);
    // [_date]가 달라졌을때만 실행


    console.log("%c render" + (++func6Id), func6Style);
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

function App() {
    return (
        <div>
            <h1>Hello</h1>
            <FuncComp7 initNumber={2}></FuncComp7>
            <ClassComp4 initNumber={2}></ClassComp4>
        </div>
    )
}


export default App;



//페이지 로드 될때
//    componentWillMount
//    render
//    componentDidMount     <=>     useEffect

   
//리렌더링 될때 = state가 바뀔때
//    shouldComponentUpdate =>  return true || false
//    componentWillUpdate
//    render
//    componentDidUpdate     <=>     useEffect

