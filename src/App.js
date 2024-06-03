import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Header(props) {
  // console.log('props', props, props.title);
  return (
    <header>
      <h2><a href="/" onClick={function (e) {
        e.preventDefault();
        props.onChangeMode();
      }}>{props.title}'s MAIN</a></h2>
    </header>)
}


function Article(props) {
  // console.log(props.title, props.body);
  return (
    <article>
      <h3>{props.title}</h3>
      <h3>{props.body}</h3>
    </article>)
}


function Nav(props) {
  // console.log(props);
  let lis = [];

  for (let i = 0; i < props.topics.length; i++) {
    let p = props.topics[i]
    lis.push(<li key={p.id}><a href={"/#/" + p.id} id={p.id} onClick={(e) => {
      e.preventDefault();
      props.onChangeMode(e.target.id);
    }}>{p.title}</a></li>);
  }
  return (
    <nav><ol>
      {lis}
    </ol></nav>)
}


function App() {

const [mode, setMode] = useState('Welcome');
  // let mode = 'Welcome';
  const topic = [
    { id: 1, title: "apple", body: "apple is ..." },
    { id: 2, title: "lemon", body: "lemon is ..." },
    { id: 3, title: "melon", body: "melon is ..." }];


  let content = null;

  if ( mode === 'Welcome') {
    content = <Article title="Welcome" body="Hello, WEB"></Article>;
  } else if ( mode === 'READ') {
    content = <Article title="CCCCHANGE" body="Hello, READ"></Article>;
  }


  return (
    <div>
      <p>시작합니다</p>

      <Header title="haha" onChangeMode={function () {
        // alert('Header');
        setMode('Welcome');
      }}></Header>
      <Nav topics={topic} onChangeMode={(iidd) => {
        // alert(iidd);
        setMode('READ');
      }}></Nav>
      {content}

    </div>
  );
}



export default App;