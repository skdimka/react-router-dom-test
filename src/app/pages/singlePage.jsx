import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const SinglePage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [post, setPosts] = useState(null);

    const goBack = () => navigate(-1);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [id]);


    return ( 
        <div>
           { post && 
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <br/>
                    <Link to={`/posts/${id}/edit`}> Edit this post</Link>
                </>
            }
            <br/>
            <button onClick={goBack}>Go Back</button>
        </div> 
    );
}
 
export default SinglePage;
