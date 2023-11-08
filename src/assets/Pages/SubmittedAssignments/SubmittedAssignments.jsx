import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SubmittedCard from '../../Components/SubmittedCard/SubmittedCard';

const SubmittedAssignments = () => {
    const submittedAssignments = useLoaderData();

    return (
        <div className='w-[90%] grid grid-cols-1 gap-4'>
            <h1 className='text-purple-400 text-3xl font-bold mt-4'>See All The Submitted Assignments</h1>
            {submittedAssignments.map(submittedAssignment => (
                <SubmittedCard
                    key={submittedAssignment._id}
                    submittedAssignment={submittedAssignment}
                />
            ))}
        </div>
    );
};

export default SubmittedAssignments;
