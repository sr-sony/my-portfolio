import { createBrowserRouter } from "react-router-dom";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Blogs from "../../Components/Blogs/Blogs";
import Home from "../../Components/Home/Home";
import Projects from "../../Components/Projects/Projects";
import Main from "../../Layout/Main";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/aboutme',
                element: <AboutMe></AboutMe>
            },
            {
                path: '*',
                element: <p>Error 404</p>
            }
        ]
    }
]);

export default routes;