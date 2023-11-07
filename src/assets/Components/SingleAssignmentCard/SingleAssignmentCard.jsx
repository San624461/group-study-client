import React, { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../Providers/AuthProvider';
import * as act from "react";
import { Link } from 'react-router-dom';
const SingleAssignmentCard = ({ assignment, handleDeletedCount, props }) => {
    const { user } = useContext(AuthContext)
    if (!user) {
        return <div>Please log in again</div>;
    }

    const { title, thumbnail, fullMarks, level, _id, email } = assignment
    // console.log(email);
    const currentUser = user.email
    // console.log(currentUser);
    const handleDelete = (id) => {
        if (currentUser === email) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/createdAssignments/${id}`, {
                        method: 'DELETE'
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                                handleDeletedCount(id)
                            }
                            else {
                                Swal.fire({
                                    title: "Error!",
                                    text: "Failed to delete the assignment.",
                                    icon: "error"
                                });

                            }
                        });
                }
            });
        } else {
            Swal.fire({
                title: "Access Denied!",
                text: "You don't have permission to delete this assignment.",
                icon: "error"
            });
        }



    }
    return (
        <tr>
            <th className='text-lg'>
                <label>
                    <div>
                        <div>

                            <button onClick={() => handleDelete(_id)}
                                className="bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>


                            </button>
                        </div>
                        <div>
                            <Link to={`/details/${_id}`}><button className='bg-white'>
                            <svg
                                className=' text-purple-500 h-6 w-6 p-1'
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                    height="1em"
                                    width="1em"
                                    {...props}
                                >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                    <path d="M15 12 A3 3 0 0 1 12 15 A3 3 0 0 1 9 12 A3 3 0 0 1 15 12 z" />
                                </svg>
                            </button></Link>
                        </div>
                        <div>
                            <Link to={`/updateAssignment/${_id}`}><button className='bg-white'>
                                

                                <svg
                                    className="h-6 w-6 text-purple-500"
                                    viewBox="0 0 1024 1024"
                                    fill="currentColor"
                                    height="1em"
                                    width="1em"
                                    {...props}
                                >
                                    <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" />
                                </svg>
                            </button></Link>
                        </div>
                    </div>
                </label>
            </th>
            <td>
                <div className="avatar">
                    <div className="mask  w-20 h-20 bg-white">
                        {thumbnail && <img src={thumbnail} alt="" />}
                    </div>
                </div>
            </td>
            <td className='text-white'>

                <div className="flex items-center space-x-3">

                    <div>
                        <div className="font-bold">{title}</div>

                    </div>
                </div>
            </td>

            <td className='text-lg'>{level}</td>
            <td className='text-lg'>{fullMarks}</td>
            <th>

            </th>
        </tr>
    );
};

export default SingleAssignmentCard;