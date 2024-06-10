import write from './img/write.jpg';
import './App.css';
import welcome from './img/welcome.jpg';
import { useState } from 'react';

function Nav(){
    return(
        <article>
         
        </article>
    )
}

function Headers(){
    return(
        <article>
         
        </article>
    )
}

function Create(){
    return (
        <article>
            <img src={write} width="500px"></img>
        <h2>게시글 작성</h2>
        <form onSubmit={(e)=>{e.preventDefault();
            const title = e.target.title.value;
            const body = e.target.body.value;
            
        }}>
            <p><input type="text" name="title" placeholder='제목'/></p>
            <p><textarea name="body" placeholder='내용을 적어주세요'></textarea></p>
            <input type='submit' value='create'/>
        </form>
        </article>
    )
}


function App() {

    const [mode, setMode] = useState('HOME');
    let middleContent = null;
    if ( mode === 'HOME'){
        middleContent = <article>
        <img src={welcome} width="500px"></img>
        <h1>~~WELCOME~~</h1>
        </article>
    }
    else if(mode === 'Create'){
        
        middleContent = <Create></Create>;
    }
  return (
    <div className="App">
        <h4>리액트 CRUD 연습</h4>
        <Headers onChangeMode={()=>{setMode('HOME');}}></Headers>
        <div>
        <ul className='no-dot'>
                <li><a href='/'>HOME</a></li>
                <li><a href='/create' onClick={(e)=>{e.preventDefault();
                    setMode('Create');
                }}>글쓰기</a></li>
            </ul>
            {/* <hr></hr> */}
        </div>
        
        {middleContent}
        
    </div>
  );
}

export default App;
