import { useEffect, useState } from "react";
import Card from "../../card";
import Header from "../header/header";
import axios from 'axios';

const PostView = () =>{
    
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:9000/user").then((res)=>res.json()).then((data)=>{
            setPosts(data);
        }).catch((err)=>{
            if(err){
                console.log(err)
            }
        });
        axios.get('')
        .then(function (response) {
            setPosts(response.data.reverse());
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    },[])
    
    return(
       
        <>
            <Header />
            <div className="post-container">
            {posts.map((post,i)=>{
                return (
                    <Card post = {post} key = {i} />
                )
            })}
        </div>
        </>
    )
}

export default PostView;