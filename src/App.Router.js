// npm install react-router-dom

import './App.css';
import { Route, Routes, Link, NavLink } from 'react-router-dom';
import React from 'react';


function Home() {
    return (
        <div>
            <h2>Home</h2>
            Home ...
        </div>
    )
}

function Route_Routes() {
    return (
        <div>
            <h2>Route_Routes</h2>
            <p>이제 path="/"앞에 exact 넣지 않아도 다른 url에서 / 가 읽히지 않는다.</p>
            <p>그리고 Topics 컴포넌트를 두번 적어도 두번 출력되지 않는다</p>
            <p>Route를 Routes로 감싸도록 문법이 바뀐후의 다른점인 것 같다</p>
            <p>그리고 V6가 되고 Routes가 생기면서 Switch는 빠진 것 같다</p>
            <p>Switch의 맨 아래에 path="/"를 넣고 Not found처리를 해줬던 방식도 Routes가 들어오면서 자체적으로 렌더링해주는 것 같다</p>
        </div>
    )
}

function Contents() {
    return (
        <div>
            <h2>Contents</h2>
            <p>Contents</p>
        </div>
    )
}

function Link_Component() {
    return (
        <div>
            <h2>Link 컴포넌트</h2>
            <p>url 바뀌어도 페이지 리로드 안되게 해줌</p>
            <p>리로드 확인은 개발자도구에서 Network</p>
            <p>import &#123; Route, Routes, Link &#125; from 'react-router-dom';</p>
        </div>
    )
}

function HashRouter_Component(){
return(
    <div>
        <h2>HashRouter</h2>
        <p>url에 root 뒤에 #를 무조건 오게해서 웹이 #뒤를 무시하게끔 하는 기능</p>
        <h3>BrowserRouter는 get에 맞춰서 url 변동 </h3>
        <p>싱글페이지는 단일 url로 동작</p>
    </div>
)
}

function NavLink_Component(){
    return(
        <div>
            <h2>NavLink 컴포넌트</h2>
            <h4>사용자가 클릭한 태그에 class="active"가 부여됨</h4>
            <p>class="active"에 설정을 주어서 사용자가 지금 사용중인 컨텐츠를 꾸며줄수있음</p>
        </div>
    )
}

const contents = [
    {id:1, title: 'title111', description: 'description1111'},
    {id:1, title: 'title222', description: 'description2222'},
    {id:1, title: 'title333', description: 'description3333'}
]


function Topics(){

    return(
        <div>
            <h2>Tocpis</h2>
            <ul>
                <li><NavLink to="/topics/1">중첩 라우팅</NavLink></li>
                <li><NavLink to="/topics/2">서브 페이지 라우팅</NavLink></li>
                <li><NavLink to="/topics/3">서브 라우트의 path에는 본라우트url을 빼고 적는다</NavLink></li>
            </ul>
            <Routes>
                <Route path="/1" element={<Contents/>}></Route>
                <Route path="/2" element={<HashRouter_Component/>}></Route>
                <Route path="/3" element={<Home/>}></Route>
            </Routes>
        </div>
    )
}

function App() {
    return (
        <div>
            <h1>React Router</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/Route_Routes">Route_Routes</a></li>
                <li><a href="/Contents">Contents</a></li>
                <li><Link to="/Link_Component">Link 컴포넌트</Link></li>
                <li><NavLink to="/HashRouter_Component">HashRouter 컴포넌트</NavLink></li>
                <li><NavLink to="/NavLink_Component">NavLink 컴포넌트</NavLink></li>
                <li><NavLink to="/Topics">Topics</NavLink></li>
            
            </ul>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Route_Routes" element={<Route_Routes />}></Route>
                <Route path="/Route_Routes" element={<Route_Routes />}></Route>
                <Route path="/Contents" element={<Contents />}></Route>
                <Route path="/Link_Component" element={<Link_Component />}></Route>
                <Route path="/HashRouter_Component" element={<HashRouter_Component  />}></Route>
                <Route path="/NavLink_Component" element={<NavLink_Component />}></Route>
                <Route path="/Topics/*" element={<Topics />}></Route>
                
            </Routes>

        </div>
    )
}
export default App;
