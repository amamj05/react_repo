import logo from './logo.svg';
import './App.css';

function Nav(){
    return(
        <article>
            <ul>
                <li><a href='/'>HOME</a></li>
                <li><a href='/create' onClick={(e)=>{e.preventDefault();}}>글쓰기</a></li>
            </ul>
        </article>
    )
}

function Create(){
    return (
        <article>
        <h2>게시글 작성</h2>
        <from>
            <p><input type="text" name="title" placeholder='제목'/></p>
            <p><textarea name="body" placeholder='내용을 적어주세요'></textarea></p>
            <input type='submit' value='create'/>
        </from>
        </article>
    )
}


function App() {
  return (
    <div className="App">
        <h2>리액트 CRUD 연습</h2>
        <Nav></Nav>
        <Create></Create>
    </div>
  );
}

export default App;
