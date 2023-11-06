import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import CreateAssignment from "../Pages/Create Assignment/CreateAssignment";
import AllAssignments from "../Pages/All Assignments/AllAssignments";
import MyAssignment from "../Pages/My Assignment/MyAssignment";
import SubmittedAssignment from "../Pages/Submitted Assignments/SubmittedAssignment";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Layout from "../Layout/Layout";

const router = createBrowserRouter([
    {
        path: '/',
        element:<Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path:'/createAssignment',
                element:<CreateAssignment></CreateAssignment>
            },
            {
                path:'/allAssignments',
                element: <AllAssignments></AllAssignments>
            },
            {
                path: '/myAssignments',
                element: <MyAssignment></MyAssignment>
            },
            {
                path: '/submitted',
                element: <SubmittedAssignment></SubmittedAssignment>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])
export default router;