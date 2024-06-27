
// JSX Code
class Hello extends React.Component {
    render(){ 
        return (
            <div>Hello {this.props.toWhat} </div>
    )}}

ReactDOM.render( <Hello toWhat="world" />, document.getElementById('root'));


// not JSX Code
class Hello extends React.Component{
    render(){
        return (
            React.createElement('div', null, `Hello ${this.props.toWhat}`)
        )}}

ReactDOM.render(
    React.createElement(Hello, {toWhat: 'World'}, null),
    document.getElementById('root'))
//JSX를 사용하지 않으면 Element를 생성해줘야함



// ex1)
const element1 = (<h1 className="id">hello, world</h1>)
let element2 = React.createElement('h1', {className: 'id'}, 'hello, world')


// React.createElement 의 결과로 객체 생성됨
element2 = {
    type: 'h1',
    props: {className: 'id', children: 'hello, world'}
}


// React.createElement 의 파라미터
React.createElement(
    type,
    [props],
    [...children]
)
//children은 Element의 자식Element



{/*  
<div> history, {javascript code} </div>   이것과 아래가 같음     */}
React.createElement('div', null, 'hi, ${javascript code}');


// ex
function formatName(user){
    return user.firstName + ' ' + user.lastName;
}

const user = { firstName : 'No', lastName: 'Yes'}

const element = ( <h2>hi, {formatName(usesr)}</h2>);

ReactDOM.render( element, document.getElementById('root'));

//user마다 다르게 출력
function getGreeting(user){
    if (user){ return <h1>hi, {formatName(usesr)}</h1>; }
    return <h1>hi, no one</h1>
}