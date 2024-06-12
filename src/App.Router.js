// npm install react-router-dom

import { Route, Routes} from 'react-router-dom';
// import HomePage from './Home';
//
import './App.css';
import React from 'react';


function Menu(props){
    return(
        <div>
            <h2>Menu</h2>
            Menu ...
        </div>
    )
}

function Contents(){
    return(
        <div>
            <h2>Contents</h2>
            Contents ...
        </div>
    )
}



function App(){

    ReactDOM.render(
        <Routes>
        {/* <Route path="/" component={HomePage}/> */}
        <Route path="/menu" component={Menu}/>
        {/* <Route path="/contents"><Contents></Contents></Route> */}
        </Routes>);
    return (
        <article>
        <h1>React Router DOM</h1>
       
        </article>
    )
}
export default App;