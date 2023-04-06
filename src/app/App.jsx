import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import Posts, { postsLoader } from "./pages/posts";
import Post, { postLoader } from "./pages/post";
import EditPost from "./pages/editPost";
import { Layout } from "./components/layout";
import LoginPage from "./pages/login";
import RequireAuth from "./hoc/requireAuth";
import CreatePost from "./pages/createPost";
import { AuthProvider } from "./hoc/authProvider";
import About from "./pages/about";
import Team from "./pages/team";
import Contacts from "./pages/contacts";
import ErrorPage from "./pages/errorpage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<LoginPage />} />
      <Route
        path="posts"
        element={<Posts />}
        loader={postsLoader}
        errorElement={<ErrorPage />}
      />
      <Route path="posts/:id" element={<Post />} loader={postLoader} />
      <Route path="posts/:id/edit" element={<EditPost />} />
      <Route
        path="posts/new"
        element={
          <RequireAuth>
            <CreatePost />
          </RequireAuth>
        }
      />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="about" element={<About />} />
      <Route path="about/contacts" element={<Contacts />} />
      <Route path="about/team" element={<Team />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
