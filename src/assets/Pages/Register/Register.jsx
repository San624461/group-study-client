
import { Link, useLocation, useNavigate } from 'react-router-dom';
import icon from '../../../media/Hands - Show.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2'
const Register = () => {



  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation()
  const navigate = useNavigate()

  // const reloadWebsite = () => {

  //   window.location.reload();
  // };
  const handleRegister = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;
    console.log(email, password, name, photo);
    setError('');
    setIsSubmitting(true);

    if (/^(?!.*[A-Z])(?!.*[^A-Za-z0-9]).{6,}$/.test(password)) {
      Swal.fire({
        title: 'Error!',
        text: 'Password should be more than 6 characters, should contain a capital letter and a special character',
        icon: 'error',
        confirmButtonText: 'Cool'
      })


      setIsSubmitting(false);
    } else {
      try {
        const res = await createUser(email, password, name, photo);
        console.log(res);
        if (res && res.user) {
          Swal.fire('Success!', 'User registered successfully.', 'success');
          // reloadWebsite()
          

        } else {

          console.error('User data not available');
        }

        navigate(location?.state ? location.state : '/');
      } catch (err) {
        setError(err.message);
        Swal.fire('Error!', err.message, 'error');
      } finally {
        setIsSubmitting(false);
      }

    }
  }

    return (
        <div>

            <div className=' flex flex-col md:flex-row lg:flex-row mt-10'>

                <div className='flex-1 '>
                    <img className='bg-white lg:ml-32 w-[300px]  border-red-400 ' src={icon} alt="" />
                </div>
                <div className='bg-[#160733] flex-1 '>
                    <div>
                        <form className="card-body 
                      "
                      onSubmit={handleRegister}>
                            <h1 className='text-purple-400 text-3xl font-bold'>Register Now</h1>

                            {/* name field */}
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text text-white font-bold">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input 
input-bordered"
                                    name='name' required />
                            </div>
                            {/* email field */}
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text text-white font-bold">Email</span>
                                </label>
                                <input type="email" placeholder="Your Email" className="input 
                input-bordered"
                                    name='email' required />
                            </div>
                            {/* email field */}
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text text-white font-bold">Photo</span>
                                </label>
                                <input type="text" placeholder="Your PhotoURL" className="input 
                input-bordered"
                                    name='photo' />
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
                bg-gradient-to-r from-[#3940D6] to-[#7F1D9B]">Register Now</button>
                                <p className='text-white mt-2'>Already Have An Account? <span><Link to='/login' className='font-medium text-purple-400'>Login Here</Link></span></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;