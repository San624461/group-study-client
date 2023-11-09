import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Featured = () => {

    const [datas, setData] = useState([])
    useEffect(() => {
        fetch('https://group-study-server-dusky.vercel.app/featured')
            .then(res=>res.json())
            .then(data => {
                setData(data)
            })
    }, [datas])
    console.log(datas);
    return (
        <div className='mt-4'>
            <h1 className='text-center text-purple-400 text-3xl mb-4 font-bold'>Featured Assignments From Students</h1>
<div className=' mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

{
    datas.map(data=> (
        <div key={data._id} className="w-full rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
	<img src={data.thumbnailImageUrl} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracki">{data.title}</h2>
			<p className="dark:text-gray-100">{data.description}</p>
		</div>
		<Link to='/allAssignments'><button type="button" className="flex btn text-purple-300 items-center justify-center w-full p-3 font-bold bg-black rounded-md dark:bg-violet-400 dark:text-gray-900">See All Assignments</button></Link>
	</div>
</div>
    ))
}
</div>
        </div>
    );
};

export default Featured;