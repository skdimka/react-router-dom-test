import { Suspense } from "react";
import {
  Await,
  defer,
  json,
  Link,
  useAsyncValue,
  useLoaderData,
  useSearchParams,
} from "react-router-dom";
import { PostFilter } from "../components/postFilter";

const Posts = () => {
  const { posts } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get("post") || "";
  const latest = searchParams.has(`latest`);

  const startsFrom = latest ? 80 : 1;

  const ResolvedPosts = () => {
    const posts = useAsyncValue();
    return (
      <>
        {posts
          .filter(
            (post) => post.title.includes(postQuery) && post.id >= startsFrom
          )
          .map((post) => (
            <Link key={post.id} to={`/posts/${post.id}`}>
              <li>{post.title}</li>
            </Link>
          ))}
      </>
    );
  };

  return (
    <div>
      <h1>Posts</h1>
      <PostFilter
        postQuery={postQuery}
        latest={latest}
        setSearchParams={setSearchParams}
      />
      <Link to="/posts/new">Add new post</Link>
      <Suspense fallback={<h2>Loadiag...</h2>}>
        <Await resolve={posts}>
          <ResolvedPosts />
        </Await>
      </Suspense>
    </div>
  );
};

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  //   if(!res.ok){
  //     throw new Response("", {status:res.status, statusText: "Not Found"})
  //   }

  return res.json();
}

export const postsLoader = async () => {
  const posts = getPosts();

  if (!posts.length) {
    throw json(
      { message: "Not Found", reason: "Wrong  url" },
      { status: "404" }
    );
  }

  return defer({
    posts,
  });
};

export default Posts;
