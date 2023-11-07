import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleAssignmentCard from '../../Components/SingleAssignmentCard/SingleAssignmentCard';

const AllAssignments = () => {
    const AllAssignments = useLoaderData()
    const [assignments, setAssignments] = useState(AllAssignments)

    const [searchLevel, setSearchLevel] = useState('all')
    console.log(assignments);
    const handleDeletedCount = (id) => {
        const remianingAssignments = assignments.filter(assignment => assignment._id !== id)
        setAssignments(remianingAssignments)
    }


    const searchedAssignment = level => {
        if (level === "all") {
            setAssignments(AllAssignments)
        }
        else {
            const searchResult = AllAssignments.filter(assignment => assignment.level === level)
            setAssignments(searchResult)
        }
    }


    return (
        <>
        <div className='w-full my-4'>
        <label htmlFor="Searching" className='text-xl font-semibold mr-4'> Search by Difficulty Level</label>
        <select value={searchLevel} className='input bg-[#160733] text-white' onChange={e => {
            const selectedLevel = e.target.value;
            setSearchLevel(selectedLevel)
            searchedAssignment(selectedLevel)

        }}>

            <option value="all">All</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>

        </select>
    </div>
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
        </div></>
    );
};

export default AllAssignments;