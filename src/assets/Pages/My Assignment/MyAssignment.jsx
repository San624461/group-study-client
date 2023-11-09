import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const MyAssignment = () => {
    const { user } = useContext(AuthContext)
    if(!user){
        return <p>Please Login</p>

    }
    const [assignments,setAssignments ]= useState([])
    useEffect(() => {
        fetch(`https://group-study-server-dusky.vercel.app/submittedAssignments?email=${user.email}`)
        .then(res=>res.json())
        .then(data =>setAssignments(data))
    }, [user.email])
    console.log(assignments);
    return (
        <div>
            {
                assignments.map(assignment => ( <div  key={assignment._id}>

                    <div className="card  bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-center">PDF Viewer for {assignment.title} Assignment</h2>
                            <div className="pdf-container">
        
                                <iframe
                                    src={assignment.pdf}
                                    title="PDF Viewer"
                                    width="100%"
                                    height="500"
                                />
                                <p><span className='text-purple-500 font-bold'>Additional Texts :</span>{assignment.text}</p>
                                <p><span className='text-purple-500 font-bold'>Full Marks :</span>{assignment.fullMarks}</p>
                                <p><span className='text-purple-500 font-bold'>Examinee Name :</span>{assignment.name}</p>
                                <p><span className='text-red-500 font-bold'> Status:</span>{assignment.status}</p>
                                <small><span className='text-purple-500 font-bold'>Submitted by</span> : {assignment.email}</small>
                              <br />
                             
                            </div>
                           
                        </div>
                    </div>
                </div>))
            }

        </div>
    );
};

export default MyAssignment;