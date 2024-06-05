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
      props.onChangeMode(Number(e.target.id));
    }}>{p.title}</a></li>);
  }
  return (
    <nav><ol>
      {lis}
    </ol></nav>)
}


function Create(props){
  return(
  <article>
    <h2>Create</h2>
    <form onSubmit={(e)=>{e.preventDefault();
      const title = e.target.title.value;
      const body = e.target.body.value;
      props.onCreate(title, body);
    }}>
      <p><input type="text" placeholder='title' name="title"/></p>
      <p><textarea placeholder='body' name="body"></textarea></p>
      <input type="submit" value="Create"/>
    </form>
  </article>
  )
}

function Update(props){
  const [newTitle, setTitle] = useState(props.title);
  const [newBody, setBody] = useState(props.body);
  

  return (
    <article>
    <h2>Update</h2>
    <form onSubmit={(e)=>{e.preventDefault();
      const title = e.target.title.value;
      const body = e.target.body.value;
      props.onUpdate(title,body);
      
    }}>
      <p><input type="text" name="title" value={newTitle} onChange={(e)=>{
        setTitle(e.target.value);
      }}/></p>
      <p><textarea name="body" value={newBody} onChange={(e)=>{
        setBody(e.target.value);
      }}></textarea></p>
      <input type="submit" value="Update"/>
    </form>
  </article>
  )
}


function App() {

  const [mode, setMode] = useState('Welcome');
  const [_id, set_id] = useState(null);
  const [topic, setTopic] = useState([
    { id: 1, title: "apple", body: "apple is ..." },
    { id: 2, title: "lemon", body: "lemon is ..." },
    { id: 3, title: "melon", body: "melon is ..." }]
  );
  const [newId, setNewId] = useState(4);
  // let mode = 'Welcome';
  

  let content = null;
  let contextShow = null;

  if (mode === 'Welcome') {
    content = <Article title="Welcome" body="Hello, WEB"></Article>;
  } else if (mode === 'READ') {
    let title, body = null;

    // console.log(_id);
    for (let i = 0; i < topic.length; i++) {
      if (topic[i].id === _id) {
        title = topic[i].title;
        body = topic[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>;
    contextShow = <><li><a href="/update" onClick={(e)=>{
      e.preventDefault(); setMode('UPDATE');}}>Update</a>
      </li>
      <li><input type='button' value='delete' onClick={()=>{
        const newTopics = [];
        for( let i=0; i < topic.length; i++ ){
          if(topic[i].id !== _id ){
            newTopics.push(topic[i]);
            
          }
        }
        setTopic(newTopics);
        setMode("Welcome");
      }}/>
        </li></>;
  } else if (mode === 'Create'){
    content = <Create onCreate={(_title, _body)=>{
      // console.log(newId, _title, _body);
      const newTopic = {id:newId , title:_title, body:_body };
      const newTopics = [...topic]
      setNewId(newId+1);
      newTopics.push(newTopic);
      setTopic(newTopics);
      setMode('READ');
      set_id(newId);
    }}></Create>
  } else if (mode === 'UPDATE'){
    let title, body = null;
    for (let i = 0; i < topic.length; i++) {
      if (topic[i].id === _id) {
        title = topic[i].title;
        body = topic[i].body;
      }
    }
    
    content = <Update title={title} body={body} onUpdate={(_title,_body)=>{
      const newTopics = [...topic];
      const newTopic = {id:_id , title:_title ,body:_body };      
      
      for (let i = 0; i < newTopics.length; i++) {
        if (newTopics[i].id === _id) {
          newTopics[i] = newTopic;
          setTopic(newTopics);
        }
      }
      setMode('READ');
    }}></Update>
  }


  return (
    <div>
      <p>시작합니다</p>
      <Header onChangeMode={()=>{setMode('Welcome');}} title="NO"></Header>
      <Header title="haha" onChangeMode={function () {
        // alert('Header');
        setMode('Welcome');
      }}></Header>
      <Nav topics={topic} onChangeMode={(iidd) => {
        // alert(iidd);
        setMode('READ');
        set_id(iidd);
      }}></Nav>
      {content}
      <ul>
        <li>
          <a href="/create" onClick={(e)=>{e.preventDefault(); setMode('Create'); }}
          >Create</a>
        </li>
        {contextShow}
      </ul>

    </div>
  );
}



export default App;
