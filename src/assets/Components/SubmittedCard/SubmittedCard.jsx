import React from 'react';

const SubmittedCard = ({ submittedAssignment }) => {
    const { pdf, text, email, title, name, status, fullMarks } = submittedAssignment;

    return (
        <div>

            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-center">PDF Viewer for {title} Assignment</h2>
                    <div className="pdf-container">

                        <iframe
                            src={pdf}
                            title="PDF Viewer"
                            width="100%"
                            height="500"
                        />
                        <p><span className='text-purple-500 font-bold'>Additional Texts :</span>{text}</p>
                        <p><span className='text-purple-500 font-bold'>Full Marks :</span>{fullMarks}</p>
                        <p><span className='text-purple-500 font-bold'>Examinee Name :</span>{name}</p>
                        <p><span className='text-red-500 font-bold'> Status:</span>{status}</p>
                        <small><span className='text-purple-500 font-bold'>Submitted by</span> : {email}</small>
                      <br />
                        <button className="btn mt-3 w-full
                text-white border-none  hover:bg-purple-300
                bg-gradient-to-r from-[#3940D6]  to-[#7F1D9B]">Give Mark</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubmittedCard;
