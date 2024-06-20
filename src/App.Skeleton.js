import { Route, Routes, NavLink, useParams } from 'react-router-dom';
import React from 'react';
import './Skeleton.css';
import meditation from './img/meditation.jpg';
import nature from './img/nature.jpg';
import gathering from './img/gathering.png';
import test from './img/test.png';
import sleep from './img/sleep.png';
import trip from './img/trip.png';


function Home() {

    let lis = [];

    for (let i = 1; i < 12; i++) {
        lis.push(<li key={i}><NavLink to="/homelist" id={i}><svg className='home-emoji'></svg></NavLink></li>)
    }
    return (
        <div className='skeleton-home'>
            <h1></h1>
            <div className='emoji-box'>
                <ul className='no-dot'>
                    {lis}
                </ul>
            </div>
        </div>
    )
}

function Header() {
    let id = 1;
    // const textInput = () => { console.log(7); }
    // onClick={()=>{textInput()}}
    return (
        <div className='skeleton-header'>
            <input className='textInput'></input>
            <svg className='header-emoji' id={id}></svg>
        </div>
    )
}



function HomeList(props) {

    let lis = [];
    for (let i = 1; i < 7; i++) {
        lis.push(<li key={i}><NavLink to={"/contentslist/" + i}><div className='contentsbox-list'></div></NavLink></li>);
    }
    console.log(props.id);
    return (
        <div>
            <Header></Header>
            <div className='skeleton-homelist'>
                {lis}
            </div>
        </div>
    )
}

function Contents() {
    const program = [{ id: 1, class:"meditation", img:<img src={meditation} className='card-box'/>},
        { id: 2, class:"nature", img:<img src={nature} className='card-box'/>},
        { id: 3, class:"gathering", img:<img src={gathering} className='card-box'/>},
        { id: 4, class:"test", img:<img src={test} className='card-box'/>},
        { id: 5, class:"sleep", img:<img src={sleep} className='card-box'/>},
        { id: 6, class:"trip", img:<img src={trip} className='card-box'/>}
    ];
    const {num} = useParams();
    let lis = [];
    for (let i = 0; i < 6; i++) {
        if(num == program[i].id){
        lis.push(program[i].img);
    }}

    return (
        <div>
            <Header></Header>
            <div className='contents-box'>
            {lis}
            </div>
        </div>
    )
}

function App() {
    return (
        <div >
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/homelist' element={<HomeList id={1} />}></Route>
                <Route path='/contentslist/:num' element={<Contents />}></Route>
            </Routes>
        </div>


    )
}


export default App;