import React, { useContext, useState } from 'react';
import icon from '../../../media/Open Doodles - Reading.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';


const Login = () => {

    const { signIn, googleLogin } = useContext(AuthContext);


    const [error, setError] = useState('');
    const location = useLocation()
    const navigate = useNavigate()
  
    const handleLogIn = async (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
  
      try {
        await signIn(email, password);
        Swal.fire(
          'Good job!',
          'Logged In Successfully!',
          'success'
        )
        navigate(location?.state ? location.state : '/')
      } catch (error) {
        setError(error.message);
        Swal.fire({
          title: 'Error!',
          text: 'Failed To Login',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      }
    };
  
    const handleGoogleSignIn = async () => {
      try {
        await googleLogin();
        Swal.fire(
          'Good job!',
          'Logged In Successfully!',
          'success'
        )
        navigate(location?.state ? location.state : '/')
      } catch (error) {
        Swal.fire({
          title: 'Error!',
          text: 'Failed To Login',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      }
    };
    return (
        <div className=' flex flex-col md:flex-row lg:flex-row mt-10 w-[90%] mx-auto'>

            <div className='flex-1 '>
                <img className='bg-white md:mt-16 md:w-full w-[90%]' src={icon} alt="" />
            </div>
            <div className='bg-[#160733] flex-1 p-8 '>
                <div>
                    <form className="card-body "
                        onSubmit={handleLogIn}   >
                        <h1 className='text-purple-400 text-3xl font-bold'>Login Now</h1>

                        {/* email field */}
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text text-white font-bold">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" className="input 
                            input-bordered"
                                name='email' required />
                        </div>

                        <div className="form-control">
                            <label className="label ">
                                <span className="label-text text-white font-bold">Password</span>
                            </label>
                            <input type="password" placeholder="Your Password" className="input input-bordered"
                                name='password'
                                required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn 
                            text-white border-none
                            bg-gradient-to-r from-[#3940D6] to-[#7F1D9B]">Login Now</button>

                            <button className='mt-4 btn w-[30%] hover:bg-gradient-to-r from-[#3940D6] to-[#7F1D9B] mx-auto text-black border-none rounded-none
                            bg-white'
                            onClick={handleGoogleSignIn}

                            > <FcGoogle></FcGoogle>Google</button>

                            <p className='text-white mt-2'>Do Not Have An Account?   <span><Link to='/register' className='font-medium text-purple-400'>Register Here</Link></span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;