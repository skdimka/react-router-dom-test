import { Outlet } from "react-router-dom";
import { CustomLink } from "./сustomLink";

const SetActive = ({ isActive }) => (isActive ? "active-link" : "");

const Layout = () => {
  return (
    <>
      <header>
        <CustomLink to="/" className={SetActive}>
          Home
        </CustomLink>
        <CustomLink to="posts" className={SetActive}>
          Posts
        </CustomLink>
        <CustomLink to="dashboard" className={SetActive}>
          Dashboard
        </CustomLink>
        <CustomLink to="about" className={SetActive}>
          About
        </CustomLink>
        <login>
          <CustomLink to="login" className={SetActive}>
            Login
          </CustomLink>
        </login>
      </header>

      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export { Layout };
