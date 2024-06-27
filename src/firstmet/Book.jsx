import React from "react";

function Book(props){
    return (
        <div>
            <h1>{` 책 이름은  ${props.name} 입니다`}</h1>
            <h1>{` 책의 가격은  ${props.price} 입니다`}</h1>
        </div>
    )
}

export default Book;