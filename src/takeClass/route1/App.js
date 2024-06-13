import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

function Home(){
    return(
        <div>
            <h2>Home</h2>
            
        </div>
    )
}

function About(){
    return(
        <div>
            
        </div>
    )
}

function UserProfile(){
    return(
        <div>
            
        </div>
    )
}

export default function App(){
    return(
        <BrowserRouter>
        <nav>
            <ul>
                <li><Link ro={'/'}>Home</Link></li>
                <li><Link ro={'/about'}>About</Link></li>
                <li><Link ro={'/user/1'}>User 1</Link></li>
                <li><Link ro={'/user/2'}>User 2</Link></li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/user/:userid" element={<UserProfile/>} />
        </Routes>
        </BrowserRouter>
    )
}

