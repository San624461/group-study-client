import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const assignment = useLoaderData();
    const {_id , thumbnail,description,title,fullMarks,date, level} = assignment
    console.log(assignment);
    return (
        <div className='w-[90%] mx-auto flex flex-col bg-[#160733] p-10'>
         
            {/* image */}
<div>
 <img src={thumbnail} className='w-full md:w-[50%] lg:w-[50%] mx-auto' alt="" />
</div>
{/* details */}
<div className='mt-4 space-y-3 text-white'>
 <h1 className='text-xl'> <span className='font-bold text-purple-500'>Assignment Title:</span> {title}</h1>
<p className='text-gray-500'><span className='font-bold text-purple-500'>Description: </span>{description}</p>

<div className='flex justify-evenly'>
    <p><span className='text-purple-500 font-bold'>Full Marks: </span>{fullMarks}</p>
    <p><span className='text-red-500'>Due Date: </span>{date}</p>
</div>

<p><span className='text-purple-500 font-bold'>Level: </span>{level}</p>
</div>

<button className='w-full btn  bg-gradient-to-r from-[#3940D6] to-[#7F1D9B] rounded-none border-none text-white mt-2'> Take Assignment</button>
       
        </div>
    );
};

export default Details;