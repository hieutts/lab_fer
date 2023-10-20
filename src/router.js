import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import FilmPage from "./pages/FilmPage";



const router = createBrowserRouter([
 {
    path: '/',
    element: <MainLayout/>,
    children: [
        {
            index: true,
            element: <Navigate to='/home' replace/> 
        },
        {
            path: '/home',
            element: <HomePage/>
        }, 
        {
            path: '/contact',
            element: <ContactPage/>
        }, 
        {
            path: 'home/film/:id',
            element: <FilmPage/>
        }, 
    ]
 }
])
export default router;