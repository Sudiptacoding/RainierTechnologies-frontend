import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error/Error";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Addnewcourses from "../pages/Addnewcourses/Addnewcourses";
import AllCorseList from "../pages/AllCorseList/AllCorseList";
import UpdateCourse from "../pages/UpdateCourse/UpdateCourse";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/registration",
                element: <Registration></Registration>,
            },
            {
                path: "/addCourse",
                element: <ProtectedRoute><Addnewcourses></Addnewcourses></ProtectedRoute>,
            },
            {
                path: "/allCourseList",
                element: <ProtectedRoute><AllCorseList></AllCorseList></ProtectedRoute>,
            },
            {
                path: "/UpdateCourse/:id",
                element: <ProtectedRoute><UpdateCourse></UpdateCourse></ProtectedRoute>,
            },
        ],
    },
]);
export default router;