import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleAssignmentCard from '../../Components/SingleAssignmentCard/SingleAssignmentCard';

const AllAssignments = () => {
    const AllAssignments = useLoaderData()
    const [assignments, setAssignments] = useState(AllAssignments)

    const [searchLevel, setSearchLevel] = useState('all')
    const [currentPage, setCurrentPage] = useState(1);
const assignmentsPerPage = 5;

const indexOfLastAssignment = currentPage * assignmentsPerPage;
const indexOfFirstAssignment = indexOfLastAssignment - assignmentsPerPage;
const currentAssignments = assignments.slice(indexOfFirstAssignment, indexOfLastAssignment);

const totalPages = Math.ceil(assignments.length / assignmentsPerPage);

const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
};
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
        <div className='w-full my-4 '>
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
        <div className="overflow-x-auto bg-[#160733] mb-4  ">

          
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
                {currentAssignments.map((assignment) => (
    <SingleAssignmentCard
        key={assignment._id}
        assignment={assignment}
        handleDeletedCount={handleDeletedCount}
    />
))}




                </tbody>


            </table>


        </div>
        
        


        <div className="flex justify-center space-x-1 dark:text-gray-100">
    <button
        title="previous"
        type="button"
        className="inline-flex items-center justify-center p-6 w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        
    >
       Prev
    </button>

    {Array.from({ length: totalPages }, (_, index) => (
        <button
            key={index + 1}
            type="button"
            className={`inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-900 dark:text-violet-400 dark:border-violet-400 ${
                currentPage === index + 1 ? 'bg-gray-600 text-white' : ''
            }`}
            onClick={() => handlePageChange(index + 1)}
        >
            {index + 1}
        </button>
    ))}

    <button
        title="next"
        type="button"
        className="inline-flex items-center justify-center w-8 h-8 py-0 border p-6 rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
    >Next
    </button>
</div>


</>
    );
};

export default AllAssignments;