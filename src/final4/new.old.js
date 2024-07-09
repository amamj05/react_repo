import React, { useState, useEffect } from "react";
import { IoCaretBackOutline } from "react-icons/io5";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import '../styles/new.css';
import axios from 'axios';


export default function New() {
    const [community, setCommunity] = useState("post");
    const [unCheck, setUnCheck] = useState(<input type="hidden" name="anonymity" value="post" />);
    const location = useLocation();
    const postInfo = { ...location.state };
    let backButton = postInfo.lastPage;

    const MyCheckbox = (checked) => {
        if (checked) {
            setCommunity("mind");
            setUnCheck(null);
        } else if (!checked) {
            setCommunity("post")
            setUnCheck(<input type="hidden" name="anonymity" value="post" />);
        }
    }


    //db


    // useEffect(() => {
    //     fetch('http://localhost:3333/api/new')
    //       .then(response => response.json())
    //       .then(data => setData(data));
    //   }, []);


    const newSave = (item) => {
        //db 에 저장되는 것 구현 필요
        console.log(
            `저장되었습니다 title : ${item.title}
        body : ${item.body} 익명 : ${item.anonymity}
        `);
        // let id_user = item.id_user ? 0 : 2;
        // let title = item.title ? 0 : item.title;
        // let body = item.body ? 0 : item.body;
        // let anonymity = item.anonymity ? 0 : 1;

        let id_user = item.id_user;
        let title = item.title;
        let body = item.body;
        let anonymity = item.anonymity ? 0 : 1;

            // const newPost ={
            //     //테스트용 user
            //     id_user: 11,
            //     title: item.value,
            //     body: item.value,
            //     anonymity: item.value
            // };

            // axios.post("http://localhost:3333/api/new", newPost).then((res)=>{
            //     console.log("게시글 작성 성공");
            //     navigate("/post");
            // }).catch((err)=>{console.log("Error while adding book:", err);})


        fetch('http://localhost:3333/api/new', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    //테스트용 user, post num 정보값 
                    id_user : id_user, 
                    title: title,
                    body: body,
                    anonymity: anonymity
            })
          })  .then(response => {
            if (!response.ok) {
                console.log(response);
              throw new Error(`HTTP error! status: ${response.status}`);           
            }
            return response.json();
          }).catch(error => console.error('Error:', error.message));
          console.log("게시글 작성")
    }


    return (
        <div className="new-page">
            <form name="newCreate" onSubmit={(e) => {
                e.preventDefault();
                console.log(
                 
                        `클릭클릭 title : ${e.target.title.value}
                    body : ${e.target.body.value} 익명 : ${e.target.anonymity.value}
                    `
        
                    )
                let item = {
                    //테스트용 user 정보값
                    id_user :2,
                    title: e.target.title.value,
                    body: e.target.body.value,
                    anonymity: e.target.anonymity.value
                }
                newSave(item)
            }}>
                <div className="new-bar">
                    <NavLink to={backButton}><IoCaretBackOutline id="post-back"></IoCaretBackOutline></NavLink>
                    <div className="button-right">
                        <label className="checkbox-right">
                            <input type="checkbox" id="checkboxId" value={community}
                                onClick={(e) => {
                                    MyCheckbox(e.target.checked);
                                }} name="anonymity" />익명
                        </label>
                        {unCheck}
                        <span><input type="submit" value="저장하기" id="new-submit" /></span>
                    </div>
                </div>
                <div className="new-title-bar"><p>
                    <input type="text" placeholder='TITLE' name="title" /></p>
                </div>
                <div className="new-textarea">
                    <p><textarea placeholder='contents' name="body"></textarea></p>
                </div>
            </form>
        </div>
    )
}

