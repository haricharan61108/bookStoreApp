import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    //to pop out login page which has username and password
    <div>
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)}  method="dialog">
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-lg text-white">Login</h3>
    {/* email */}
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br></br>
        <input type='email' placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none'
        {...register("email", { required: true })}
         />
         <br></br>
         {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/* password */}
    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br></br>
        <input type='password' placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none' 
          {...register("password", { required: true })}
        />
        <br></br>
        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/* button */}
    <div className='flex justify-around mt-6'>
        <button type='submit' className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200' >Login</button>
        <span className='mt-1'>Not registered? <Link to="/signup"><span className='underline underline-offset-2 text-blue-500'>Signup</span></Link></span>
    </div>
    </form>
  </div>
</dialog>
    </div>
  )
}

export default Login
