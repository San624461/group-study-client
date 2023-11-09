import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'
const Marking = () => {
    const assignment = useLoaderData()
    const [marks,setMarks]= useState('')
    const [feedback , setFeedback] = useState('')
    const[successMsg,setSuccessMsg] =useState('')
    // console.log(assignments);
 const { pdf, text,name,email,fullMarks,status,_id} = assignment

 const handleMark = ()=>{
    fetch(`https://group-study-server-dusky.vercel.app/submittedAssignments/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            status: 'completed',
            marks : marks,
            feedback : feedback,
        })
    })
    .then(res=>res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount === 1){
            Swal.fire({
                title: 'Success!',
                text: 'Assignment Updated Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }else{
            alert('not successful')
        }
    })
    .catch(error=>
        console.log(error))
 }
    return (
        <div>
           <h2>Assignment By : {name}</h2>
           <p>Email: {email}</p>
           <div className="pdf-container">
                <iframe src={pdf} title="PDF Viewer" width="100%" height="500" />
            </div>
            <p>Additional Text : {text}</p>
            <input type="number" placeholder='Marks' value={marks}
            onChange={(e)=> setMarks(e.target.value) }/>

            <textarea placeholder='feedback'
            value={feedback}
            onChange={(e)=>setFeedback(e.target.value)}
             
            cols="30" rows="10"></textarea>
            <button className='btn'
            onClick={handleMark}>Submit</button>
        </div>
    );
};

export default Marking;