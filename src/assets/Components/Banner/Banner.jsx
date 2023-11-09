import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            {/* <!-- Hero --> */}
<div className="relative overflow-hidden h-[400px]">
  {/* <!-- Gradients --> */}
  <div aria-hidden="true" className="flex absolute -top-96 start-1/2 transform -translate-x-1/2">
    <div className="bg-gradient-to-r from-purple-800 to-purple-200 blur-3xl w-[100rem] h-[100rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-purple-900 dark:to-purple-900"></div>
    <div className="bg-gradient-to-r from-purple-200 to-purple-200 blur-3xl w-[100rem] h-[100rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem]dark:from-purple-900 dark:to-purple-900"></div>
  </div>
  {/* <!-- End Gradients --> */}

  <div className="relative z-10">
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <div className="max-w-2xl text-center mx-auto">
      <div className="flex justify-center">
      <a className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
        100 Students Are Online Now
        <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-400">
          <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </span>
      </a>
    </div>

        {/* <!-- Title --> */}
        <div className="mt-5 max-w-2xl">
          <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
           Study With StudySync
          </h1>
        </div>
        {/* <!-- End Title --> */}

        <div className="mt-5 max-w-3xl">
          <p className="text-lg text-gray-600 dark:text-gray-400">Meet ,study with friends around your own friend circle </p>
        </div>

        {/* <!-- Buttons --> */}
        <div className="mt-8 gap-3 flex justify-center">
          <a className="btn 
                text-white border-none
                bg-gradient-to-r from-[#3940D6] to-[#7F1D9B]" href="#">
          <Link to='/register'>  Register Now</Link>
            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </a>
          
        </div>
        {/* <!-- End Buttons --> */}
      </div>
    </div>
  </div>
</div>
{/* <!-- End Hero --> */}
        </div>
    );
};

export default Banner;