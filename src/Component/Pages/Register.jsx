import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
  const {createUser, setUser} = use(AuthContext)
  const handleRegister =(e)=>{
       e.preventDefault()
       const form= e.target;
       const name = form.name.value;
       const photo = form.photo.value;
       const email = form.email.value;
       const password = form.password.value;
       console.log({name, photo, email, password})
      createUser(email, password) 
      .then((result) => {
        const user =result.user;
        setUser(user);
      })
      .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorMessage)
  });
  }
    return (
          <div className='flex justify-center min-h-screen items-center'>
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className='font-bold  text-2xl text-center'>Register Your Account</h2>
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
            {/* name */}
             <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="name"  required/>
            {/* photo url */}
             <label className="label">Photo URL</label>
          <input type="text" name='photo' className="input" placeholder="photo url" required />
          {/* email */}
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" required />
          {/* password */}
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" required />
         
          <button  type='submit' className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p className='text-center mt-2 font-semibold'>Allready Have An Account ? <Link to="/auth/login"className='text-secondary'>Login</Link></p>
      </form>
    </div>
        </div>
    );
};

export default Register;