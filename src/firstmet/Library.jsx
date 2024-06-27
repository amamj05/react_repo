import React from "react";
import Book from "./Book";

function Library(props){
    return(
        <div>
            <Book name="파이썬" price={25000}></Book>
            <Book name="리액트" price={19000}></Book>
            <Book name="C++" price={31000}></Book>
        </div>
    )
}

export default Library;