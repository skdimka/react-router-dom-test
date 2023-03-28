import { Link, useParams } from "react-router-dom";

const EditPost = () => {
    const {id} = useParams();

    return ( 
        <>
            <h1>Edit post {id}</h1>
            <p>To edit, enter editor mode</p>
            <br/>
            <Link to={`/posts/${id}`}> To post</Link>
            <br/>
            <Link to={"/posts"}>All posts</Link>
        </>
    );
}
 
export default EditPost;