import write from './img/write.jpg';
import './App.css';
import welcome from './img/welcome.jpg';
import list from './img/list.png';
import { useState } from 'react';



function Read(props) {

    const _title = [];

    for (let i = 0; i < props.post.length; i++) {
        let p = props.post[i];
        _title.push(<a href='#' onClick={(e) => { e.preventDefault(); }}><li key={p.id} className='post-li'
        >{p.title}</li></a>);
    }

    return (
        <article>
            <img src={list} width="400px"></img>
            <ol className='post-ol'>
                {_title}
            </ol>
        </article>
    )
}

function Headers() {
    return (
        <article></article>
    )
}

function Create() {
    return (
        <article>
            <img src={write} width="500px"></img>
            <h2>게시글 작성</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                const title = e.target.title.value;
                const body = e.target.body.value;

            }}>
                <p><input type="text" name="title" placeholder='제목' /></p>
                <p><textarea name="body" placeholder='내용을 적어주세요'></textarea></p>
                <input type='submit' value='create' />
            </form>
        </article>
    )
}


function App() {

    const [mode, setMode] = useState('HOME');
    let middleContent = null;
    const post = [{ id: 1, title: 'title111', body: 'body111' },
    { id: 2, title: 'title222', body: 'body222' },
    { id: 3, title: 'title333', body: 'body333' }
    ];

    if (mode === 'HOME') {
        middleContent = <article>
            <img src={welcome} width="500px"></img>
            <h1>~~WELCOME~~</h1>
        </article>
    }
    else if (mode === 'Create') {

        middleContent = <Create></Create>;
    }
    else if (mode === 'READ') {

        middleContent = <Read post={post}></Read>;
    }

    return (
        <div className='App'>
            <h4>리액트 CRUD 연습</h4>
            <Headers onChangeMode={() => { setMode('HOME'); }}></Headers>
            <div>
                <ul className='no-dot'>
                    <li><a href='/'>HOME</a></li>
                    <li><a href='/create' onClick={(e) => {
                        e.preventDefault();
                        setMode('Create');
                    }}>글쓰기</a></li>
                    <li><a href='/READ' onClick={(e) => { e.preventDefault(); setMode('READ'); }}>게시글 목록</a></li>
                </ul>
                {/* <hr></hr> */}
            </div>

            {middleContent}

        </div>
    );
}

export default App;
