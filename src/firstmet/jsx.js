
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