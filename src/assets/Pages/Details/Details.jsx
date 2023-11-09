import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2'
const Details = () => {

    const assignment = useLoaderData();
    const { user } = useContext(AuthContext)
    if (!user) {
        return <div>Please log in again</div>;
    }

    const email = user.email


const status = 'pending'
    const { _id, thumbnail, description, title, fullMarks, date, level } = assignment
    console.log(assignment);


    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const pdf = form.pdf.value;
        const text = form.text.value;
        const name = form.name.value
        console.log(pdf, text, email);
        const submitted = {
            pdf,
            text,
            email,
            title,
            status,
            fullMarks,
            name
        }
        fetch('https://group-study-server-oga2e3zsk-sans-projects-f62f7a6a.vercel.app/submittedAssignments', {
            method: 'POST',
            headers: {
                'content-type' :'application/json'
              },
              body: JSON.stringify(submitted)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    console.log('added successfully');

                    // Close the modal
                    const modal = document.getElementById('my_modal_5');
                    if (modal) {
                        modal.close();
                    }




                    // Show a success message using SweetAlert
                    Swal.fire({
                        icon: 'success',
                        title: 'Assignment submitted successfully!',
                        showConfirmButton: false,
                        timer: 1500, // Automatically close the alert after 1.5 seconds
                    });

                    // Reset the form
                    form.reset();
                } else {
                    console.error('Error submitting assignment');
                }

            });

}







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






        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn   w-full  bg-gradient-to-r from-[#3940D6] to-[#7F1D9B] rounded-none border-none text-white mt-2" onClick={() => document.getElementById('my_modal_5').showModal()}>Take Assignment</button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box bg-purple-300">
                <h3 className="font-bold text-lg text-purple-950">Take Assignment</h3>

                <form action="" onSubmit={handleSubmit}>

<input type="text" className='w-full mb-4 p-3 rounded-md mt-4' name="name" id="" placeholder='Your Full Name'/>
                    
                            <input type="text" name="pdf" id="files" placeholder='Your pdf link here' className="p-4 border-2 border-dashed   
        
        w-full
        rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" />
                      
                    <textarea className="textarea mt-4 w-full" placeholder="Quick Text About The Assignment" name='text'></textarea>


                    <div className='modal-action'>
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn  w-full  bg-gradient-to-r from-[#3940D6] to-[#7F1D9B] rounded-none border-none text-white mt-2" method='dialog' >Submit</button>
                    </div>


                </form>
            </div>
        </dialog>




    </div>
);
};

export default Details;