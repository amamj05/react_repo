import React from "react";

function NoBook(props){
    return (
        React.createElement('div', null, 
            [
                React.createElement(
                    'h1', null, `책 이름은 ${props.name}입니다`),
                React.createElement(
                    'h2', null, `책의 가격은 ${props.price}입니다`)
            ]
        )
    )
}

export default NoBook;