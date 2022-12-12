import { createBrowserRouter } from "react-router-dom";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Blogs from "../../Components/Blogs/Blogs";
import Home from "../../Components/Home/Home";
import ProjectOne from "../../Components/ProjectDetails/ProjectOne";
import ProjectThree from "../../Components/ProjectDetails/ProjectThree";
import ProjectTwo from "../../Components/ProjectDetails/ProjectTwo";
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
                path: '/projectone',
                element: <ProjectOne></ProjectOne>
            },
            {
                path: '/projecttwo',
                element: <ProjectTwo></ProjectTwo>
            },
            {
                path: '/projectthree',
                element: <ProjectThree></ProjectThree>
            },
            {
                path: '*',
                element: <p>Error 404</p>
            }
        ]
    }
]);

export default routes;