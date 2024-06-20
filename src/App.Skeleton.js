import { Route, Routes, Link, NavLink, useParams } from 'react-router-dom';
import React from 'react';
import './Skeleton.css';



function Home() {

    
    return (
        <div className='skeleton-home'>
            <h1></h1>
            <div className='emoji-box'>
                <ul className='no-dot'>
                    <li><NavLink to="/homelist" id='1'><svg className='home-emoji'></svg></NavLink></li>
                    <li><NavLink to="/homelist" id='2'><svg className='home-emoji'></svg></NavLink></li>
                    <li><NavLink to="/homelist" id='3'><svg className='home-emoji'></svg></NavLink></li>
                    <li><NavLink to="/homelist" id='4'><svg className='home-emoji'></svg></NavLink></li>
                    <li><NavLink to="/homelist" id='5'><svg className='home-emoji'></svg></NavLink></li>
                    <li><NavLink to="/homelist" id='6'><svg className='home-emoji'></svg></NavLink></li>
                    <li><NavLink to="/homelist" id='7'><svg className='home-emoji'></svg></NavLink></li>
                    <li><NavLink to="/homelist" id='8'><svg className='home-emoji'></svg></NavLink></li>
                    <li><NavLink to="/homelist" id='9'><svg className='home-emoji'></svg></NavLink></li>
                    <li><NavLink to="/homelist" id='10'><svg className='home-emoji'></svg></NavLink></li>
                    <li><NavLink to="/homelist" id='11'><svg className='home-emoji'></svg></NavLink></li>
                    <li><NavLink to="/homelist" id='12'><svg className='home-emoji'></svg></NavLink></li>
                    <li><NavLink to="/homelist" id='13'><svg className='home-emoji'></svg></NavLink></li>
                    <li><NavLink to="/homelist" id='14'><svg className='home-emoji'></svg></NavLink></li>
                    <li><NavLink to="/homelist" id='15'><svg className='home-emoji'></svg></NavLink></li>
                    <li><NavLink to="/homelist" id='16'><svg className='home-emoji'></svg></NavLink></li>
                </ul>
            </div>
        </div>
    )
}

function Header(){
    let id = 1;
    const textInput = ()=>{console.log(7); }
    // onClick={()=>{textInput()}}
    return (
        <div className='skeleton-header'>
            <input className='textInput'></input>
            <svg className='header-emoji' id={id}
           ></svg>
            
        </div>
    )
}

function HomeList(props) {

    console.log(props.id);
    return (
        <div className='skeleton-homelist'>
          <Header></Header>
            contentsList
        </div>
    )
}


function App() {
    return (
        <div >

            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/homelist' element={<HomeList id={1}/>}></Route>
            </Routes>
        </div>


    )
}


export default App;