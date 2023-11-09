import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
import SubmittedCard from '../../Components/SubmittedCard/SubmittedCard';

const MarkedAssignments = () => {
    const [assignments, setSubmittedAssignments] = useState([])

    useEffect(() => {
        fetch('https://group-study-server-oga2e3zsk-sans-projects-f62f7a6a.vercel.app/submittedAssignments')
        .then( res=>res.json())
        .then(data => setSubmittedAssignments(data))
    }, [])


    const feedbackAssignments = assignments.filter(assignment => assignment.status === 'completed' && assignment.feedback && assignment.marks)
   
    return (
        <div className='w-[90%] grid grid-cols-1 gap-4'>
        <h1 className='text-purple-400 text-3xl font-bold mt-4'>Marked Assignments</h1>
        {feedbackAssignments.map((submittedAssignment) => (
              <div key={submittedAssignment._id}>

              <div className="card  bg-base-100 shadow-xl">
                  <div className="card-body">
                      <h2 className="card-title text-center">PDF Viewer for {submittedAssignment.title} Assignment</h2>
                      <div className="pdf-container">
  
                          <iframe
                              src={submittedAssignment.pdf}
                              title="PDF Viewer"
                              width="100%"
                              height="500"
                          />
                          <p><span className='text-purple-500 font-bold'>Additional Texts :</span>{submittedAssignment.text}</p>
                          <p><span className='text-purple-500 font-bold'>Full Marks :</span> {submittedAssignment.marks}/{submittedAssignment.fullMarks}</p>
                          <p><span className='text-purple-500 font-bold'>Examinee Name :</span>{submittedAssignment.name}</p>
                          <p><span className='text-purple-500 font-bold'>Feedback By the examiner :</span>{submittedAssignment.feedback}</p>
                        
                          <p><span className='text-red-500 font-bold'> Status: </span>{submittedAssignment.status}</p>
                          <small><span className='text-purple-500 font-bold'>Submitted by</span> : {submittedAssignment.email}</small>
                        <br />
                         
                      </div>
                     
                  </div>
              </div>
          </div>
        ))}
    </div>
    );
};

export default MarkedAssignments;