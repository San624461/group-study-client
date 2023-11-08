import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SubmittedCard from '../../Components/SubmittedCard/SubmittedCard';

const SubmittedAssignments = () => {

    const [assignments, setSubmittedAssignments] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/submittedAssignments')
        .then( res=>res.json())
        .then(data => setSubmittedAssignments(data))
    }, [])


    const pendingAssignments = assignments.filter(assignment => assignment.status === 'pending')
    return (
        <div className='w-[90%] grid grid-cols-1 gap-4'>
            <h1 className='text-purple-400 text-3xl font-bold mt-4'>See All The Submitted Assignments</h1>
            {pendingAssignments.map(submittedAssignment => (
                <SubmittedCard
                    key={submittedAssignment._id}
                    submittedAssignment={submittedAssignment}
                />
            ))}
        </div>
    );
};

export default SubmittedAssignments;
