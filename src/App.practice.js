import logo from './logo.svg';
import './App.css';
import welcome from './img/welcome.jpg';

function Nav(){
    return(
        <article>
            <ul className='no-dot'>
                <li><a href='/'>HOME</a></li>
                <li><a href='/create' onClick={(e)=>{e.preventDefault();}}>글쓰기</a></li>
            </ul>
            <hr></hr>
        </article>
    )
}

function Headers(){
    return(
        <><h1>~~WELCOME~~</h1>
        <img src={welcome} width="500px"></img>
        </>

    )
}

function Create(){
    return (
        <article>
        <h2>게시글 작성</h2>
        <form>
            <p><input type="text" name="title" placeholder='제목'/></p>
            <p><textarea name="body" placeholder='내용을 적어주세요'></textarea></p>
            <input type='submit' value='create'/>
        </form>
        </article>
    )
}


function App() {
  return (
    <div className="App">
        <h4>리액트 CRUD 연습</h4>
        <Headers></Headers>
        <Nav></Nav>
        <Create></Create>
    </div>
  );
}

export default App;
