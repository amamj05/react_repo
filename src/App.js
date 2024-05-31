import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <header>
      <h2><a href="/">MAIN</a></h2>
    </header>)
}

function Nav() {
  return (
    <nav><ol>
      <li><a href="#">html</a></li>
      <li><a href="#">css</a></li>
      <li><a href="#">js</a></li>
    </ol></nav>)
}

function Body() {
  return (
    <body>hello<br></br>hi</body>)
}


function App() {
  return (
    <div>
      <p>시작합니다</p>

      <Header></Header>
      <Nav></Nav>
      <Body></Body>

    </div>
  );
}



export default App;