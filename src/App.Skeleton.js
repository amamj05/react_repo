import { Route, Routes, NavLink, useParams } from 'react-router-dom';
import React from 'react';
import './Skeleton.css';



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
    return (
        <div>
            hahaha
        </div>
    )
}

function App() {
    return (
        <div >
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/homelist' element={<HomeList id={1} />}></Route>
                <Route path='/contentslist/:id' element={<Contents />}></Route>
            </Routes>
        </div>


    )
}


export default App;