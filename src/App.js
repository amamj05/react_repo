import logo from './logo.svg';
import './App.css';

function Header(props) {
  // console.log('props', props, props.title);
  return (
    <header>
      <h2><a href="/">{props.title}'s MAIN</a></h2>
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
    lis.push(<li key={p.id}><a href={"/#/"+p.id}>{p.title}</a></li>);
  }
  return (
    <nav><ol>
      {lis}
    </ol></nav>)
}


function App() {
  const topic = [
    { id: 1, title: "apple", body: "apple is ..." },
    { id: 2, title: "lemon", body: "lemon is ..." },
    { id: 3, title: "melon", body: "melon is ..." }];


  return (
    <div>
      <p>시작합니다</p>

      <Header title="haha"></Header>
      <Nav topics={topic}></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>

    </div>
  );
}



export default App;