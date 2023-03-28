import { Routes, Route } from "react-router-dom"
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import Posts from "./pages/posts";
import SinglePage from "./pages/singlePage";
import EditPost from "./pages/editPost";
import { Layout } from "./components/layout";
import LoginPage from "./pages/login";
import RequireAuth from "./hoc/requireAuth";
import CreatePost from "./pages/createPost";
import { AuthProvider } from "./hoc/authProvider";




function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="posts" element={<Posts />} />
            <Route path="posts/:id" element={<SinglePage />} />
            <Route path="posts/new" element={
              <RequireAuth>
                <CreatePost />
              </RequireAuth>
            } />
            <Route path="posts/:id/edit" element={<EditPost />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;


