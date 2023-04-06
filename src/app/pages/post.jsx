import { Suspense } from "react";
import {
  Await,
  defer,
  Link,
  useAsyncValue,
  useLoaderData,
  useNavigate,
} from "react-router-dom";

const Post = () => {
  const { post, id } = useLoaderData();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const ResolvedPost = () => {
    const post = useAsyncValue();
    return (
      <>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </>
    );
  };

  return (
    <div>
      <>
        <Suspense fallback={<h2>Post is loading...</h2>}>
          <Await resolve={post}>
            <ResolvedPost />
          </Await>
        </Suspense>
        <br />
        <Link to={`/posts/${id}/edit`}> Edit this post</Link>
      </>
      <br />
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

async function getPostById(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

export const postLoader = async ({ params }) => {
  const id = params.id;
  return defer({ id, post: getPostById(id) });
};
export default Post;
