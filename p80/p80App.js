import { useState } from "react";

function Article(props){
    return (
    <article>
        <h3>{props.title}</h3>
        <h3>{props.body}</h3>
    </article>
    )
}

function Create(props){
    return (
        <article>
            <h2>Create</h2>
            <form onSubmit={(e)=>{e.preventDefault();
                const title = e.target.title.value;
                const body = e.target.title.value;
                props.onCreate(title, body);
            }}>
                <div><input type="text" name="title" placeholder="title"></input></div>
                <div><textarea name="body" placeholder="body"></textarea></div>
                <div><input type="submit" value="Create"/></div>
            </form>
        </article>
    )
}

function App(){
    const [mode, setMode] = useState('WELCOME');
    const [id, setId] = useState(null);

    // const topics = [
    //     { id: 1, title: "apple", body: "apple is ..." },
    //     { id: 2, title: "lemon", body: "lemon is ..." },
    //     { id: 3, title: "melon", body: "melon is ..." }];

    let content = mull;
    if (mode == 'WECOME'){
        content = <Article title="Welcome" body="hello"></Article>;
    }else if(mode == 'READ'){
        content = <Article></Article>;
    }

    return (
        <div className="App">
            <Header title="WEB" onChangeMode={()=>{setMode("WECOME");}}></Header>
            <Nav topics={topic} onChangeMode={(_id)=>{
                setMode('READ'); setId(_id);
            }}></Nav>
            {content}
            <a href="/create" onClick={(e)=>{e.preventDefault();
                setMode('CREATE');
            }}>Create</a>
        </div>
    )
}


export default App;