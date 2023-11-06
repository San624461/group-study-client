import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const CreateAssignment = () => {

  const handleCreateAssignment = e=>{
    e.preventDefault()
    const form = e.target;
    const title = form.title.value
    const description = form.description.value;
    const fullMarks = form.marks.value;
    const thumbnail = form.photo.value;
    const level = form.level.value;
    const date = form.date.value
    console.log(title,description,fullMarks,thumbnail,date,level);
  }
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className='bg-[#160733]'>
  
      <form className="card-body" 
      onSubmit={handleCreateAssignment}>
      <h1 className='text-purple-400 text-3xl font-bold mt-4'>Create Assignment Now</h1>
      {/* title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-bold">Assignment Title</span>
          </label>
          <input type="text" placeholder="Title" className="input input-bordered" required name='title' />
        </div>
        {/* description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-bold">Description</span>
          </label>
          <input type="text"  placeholder="Write The Description" className="input input-bordered input-info w-full " name="description"/>
          
        </div>

        {/* Marks */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-bold">Marks</span>
          </label>
          <input type="text" placeholder="Full Marks" className="input input-bordered" required name="marks" />
        </div>
        {/* Thumbnail */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-bold">Thumbnail</span>
          </label>
          <input type="text" placeholder="Photo URL" className="input input-bordered" required name="photo"/>
        </div>
        {/* Difficult Level */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-bold">Assignment Difficulty Level</span>
          </label>
          <select name="level" id="" className='input' placeholder="Select the difficulty Level">
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
          <DatePicker name="date" className="w-full p-2" selected={startDate} onChange={(date) => setStartDate(date)} />
          
        </div>


     
        <div className="form-control mt-6">
          <button className="btn 
                text-white border-none  hover:bg-purple-300
                bg-gradient-to-r from-[#3940D6]  to-[#7F1D9B]">Create Assignment</button>
        </div>
      </form>
    </div>
  );
};

export default CreateAssignment;