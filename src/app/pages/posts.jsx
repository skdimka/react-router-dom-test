import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);


    return ( 
         <div>
            <h1>Posts</h1> 
        {
            posts.map(post => (
                <Link key={post.id} to={`/posts/${post.id}`}>
                <li>{post.title}</li>
                </Link>
            ))    
        }
         </div>
    );
}

 
export default Posts;
