

import { useEffect, useState } from "react"
import Post from "./Post";


export default function Posts(){
    const [posts ,setPost] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPost(data))
    },[])

    return(
        <div>
            <h3>Posts: {posts.length}</h3>
            {
                posts.map(post1 => <Post post={post1}></Post>)
            }
        </div>
    )
}