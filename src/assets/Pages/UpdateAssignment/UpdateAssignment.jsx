import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import Swal from 'sweetalert2'
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const UpdateAssignment = () => {

  const [startDate, setStartDate] = useState(new Date());
  
  const location = useLocation()
  const navigate = useNavigate()
  const assignments = useLoaderData()

  const { user } = useContext(AuthContext)

  if (!user) {
    return <div>Please log in again</div>;
  }
  // console.log(user.email);

  const currentUser = user.email
  const { title, description, thumbnail, fullMarks, level, _id, email, date } = assignments
  // console.log(email);



  const handleUpdateAssignment = e => {
    e.preventDefault()
    const form = e.target;
    const title = form.title.value
    const description = form.description.value;
    const fullMarks = form.marks.value;
    const thumbnail = form.photo.value;
    const level = form.level.value;
    const date = form.date.value

    // console.log(title,description,fullMarks,thumbnail,date,level);

    const UpdatedAssignment = {
      title,
      description,
      fullMarks,
      thumbnail,
      level,
      date,

    }

    

    if (currentUser !== email) {
      Swal.fire({
        title: "Access Denied!",
        text: "You don't have permission to update this assignment.",
        icon: "error"
      });
      return <div>Access Denied</div>;
    }


    fetch(`https://group-study-server-dusky.vercel.app/createdAssignments/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(UpdatedAssignment)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: 'Success!',
            text: 'Assignment Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          navigate(location?.state ? location.state : '/allAssignments')
        }
        // form.reset()
      })

      
  }

  
  return (
    <div className='bg-[#160733]'>

      <form className="card-body"
        onSubmit={handleUpdateAssignment}>
        <h1 className='text-purple-400 text-3xl font-bold mt-4'>Update Assignment Now</h1>
        {/* title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-bold">Assignment Title</span>
          </label>
          <input type="text" placeholder="Title" className="input input-bordered" required name='title' defaultValue={title} />
        </div>
        {/* description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-bold">Description</span>
          </label>
          <input type="text" placeholder="Write The Description" className="input input-bordered input-info w-full " name="description" defaultValue={description} />

        </div>

        {/* Marks */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-bold">Marks</span>
          </label>
          <input type="text" placeholder="Full Marks" className="input input-bordered" required name="marks" defaultValue={fullMarks} />
        </div>
        {/* Thumbnail */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-bold">Thumbnail</span>
          </label>
          <input type="text" placeholder="Photo URL" className="input input-bordered" required name="photo" defaultValue={thumbnail} />
        </div>
        {/* Difficult Level */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-bold">Assignment Difficulty Level</span>
          </label>
          <select name="level" id="" className='input' placeholder="Select the difficulty Level" defaultValue={level}>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        {/* due date Level */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-bold">Pick A date</span>

          </label>
          <DatePicker name="date" className="w-full p-2 input" selected={startDate} onChange={(date) => setStartDate(date)} defaultValue={date} />

        </div>



        <div className="form-control mt-6">
          <button className="btn 
                text-white border-none  hover:bg-purple-300
                bg-gradient-to-r from-[#3940D6]  to-[#7F1D9B]">Update The Assignment</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateAssignment;