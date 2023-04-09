import {
  Link,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import UpdatePost from "../components/updatePost";

const EditPost = () => {
  //   const { id } = useParams();
  const data = useActionData();
  const { post, id } = useLoaderData();
  const navigation = useNavigation();

  return (
    <>
      {data?.message && <div style={{ color: "green" }}>{data.message}</div>}
      <h1>Edit post {id}</h1>
      <UpdatePost {...post} submitting={navigation.state === "submitting"} />
      <Link to={`/posts/${id}`}> To post</Link>
    </>
  );
};

const updatePost = async (post) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post.get("id")}`,
    {
      method: "PUT",
      body: post,
    }
  );
  return res.json();
};

export const updatePostAction = async ({ request }) => {
  const formData = await request.formData();

  if (!formData.get("title") || !formData.get("body")) {
    return { message: "All field are required!!!" };
  }

  const updatedPost = await updatePost(formData);

  return { message: `Post ${updatedPost.id} was successfully updated` };
};

export default EditPost;
