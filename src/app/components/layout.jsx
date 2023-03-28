import { Outlet } from "react-router-dom";
import { CustomLink } from "./CustomLink";


const SetActive = ({isActive}) =>  isActive ? "active-link" : "";

const Layout = () => {
    return (
        <>
        <header>
            <CustomLink to="/" className={SetActive}>Home</CustomLink>
            <CustomLink to="login" className={SetActive}>Login</CustomLink>
            <CustomLink to="posts" className={SetActive}>Posts</CustomLink>
            <CustomLink to="Dashboard" className={SetActive}>Dashboard</CustomLink>
        </header>

         <main className="container">
            <Outlet/>
        </main>    
      </>
    )
}

export {Layout}

