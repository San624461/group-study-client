import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleAssignmentCard from '../../Components/SingleAssignmentCard/SingleAssignmentCard';

const AllAssignments = () => {
    const AllAssignments = useLoaderData()
    const [assignments,setAssignments] = useState(AllAssignments)
    console.log(assignments);
    const handleDeletedCount = (id)=>{
        const remianingAssignments = assignments.filter(assignment=> assignment._id !== id)
        setAssignments(remianingAssignments)
    }
    return (
        <div className="overflow-x-auto bg-[#160733]  ">
            <table className="table text-white">
                {/* head */}
                <thead className='text-white text-xl'>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        
                        <th>Subject Thumbnail</th>
                        <th>Subject Name</th>
                        <th>Difficulty Level</th>
                        <th>Marks</th>
                      
                    </tr>
                </thead>
                <tbody>
                    {
                        assignments.map(assignment => <SingleAssignmentCard
                            key={assignment._id}


                            assignment={assignment}
                            handleDeletedCount={handleDeletedCount}
                        ></SingleAssignmentCard>)
                    }



                </tbody>


            </table>
        </div>
    );
};

export default AllAssignments;