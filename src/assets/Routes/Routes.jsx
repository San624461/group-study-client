import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import CreateAssignment from "../Pages/Create Assignment/CreateAssignment";
import AllAssignments from "../Pages/All Assignments/AllAssignments";
import MyAssignment from "../Pages/My Assignment/MyAssignment";
import SubmittedAssignment from "../Pages/Submitted Assignments/SubmittedAssignment";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Layout from "../Layout/Layout";
import UpdateAssignment from "../Pages/UpdateAssignment/UpdateAssignment";

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
                element: <AllAssignments></AllAssignments>,
                loader: ()=>fetch('http://localhost:5000/createdAssignments')
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
            },
            {
                path:'/updateAssignment/:id',
                element: <UpdateAssignment></UpdateAssignment>,
                loader: ({params})=>fetch(`http://localhost:5000/createdAssignments/${params.id}`)
            }
        ]
    }
])
export default router;