import React from "react";


function FuncComp1(props){
    return(
        <div>
            <h2>function style component</h2>
            <p>Number : {props.initNumber}</p>
        </div>
    )
}

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


function FuncComp2(props){
    return(
        <div>
            <h2>function style component</h2>
            <p>Number : {props.initNumber}</p>
        </div>
    )
}

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



function App(){
    return (
        <div>
            <h1>Hello</h1>
            <FuncComp2 initNumber={2}></FuncComp2>
            <ClassComp2 initNumber={2}></ClassComp2>
        </div>
    )
}


export default App;