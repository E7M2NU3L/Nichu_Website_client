import React, { useState } from 'react'
import './main.css';
import { Facebook, GitHub, Google } from '@mui/icons-material';

const Login = () => {
  // states
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleNameChange = (e) => setForm.name(e.target.value);
  const handleEmailChange = (e) => setForm.email(e.target.value);
  const passwordChange = (e) => setForm.password(e.target.value);

  const handleSubmitForm = (e) => {
    e.preventDefaults();

    // further login functionality
  }

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <main className='bg-slate-400 px-4 py-2'>
        <h1 className='mb-6 font-["Poppins", sans-serif] font-bold'>
          Login
        </h1>

        <div className='icons flex py-4 gap-3 items-center justify-between'>
          <Google />
          <Facebook />
          <GitHub />
        </div>
        <form className='flex flex-col justify-around gap-y-3' onSubmit={handleSubmitForm}>
          <input type='name' className='outline-none bg-transaparent text-gray-800' placeholder='Your name' value={form.name} onChange={handleNameChange} />
          <input type='email' className='outline-none bg-transaparent text-gray-800' placeholder='Your Email' value={form.email} onChange={handleEmailChange} />
          <input type="password" className='outline-none bg-transaparent text-gray-800' placeholder='password' value={form.password} onChange={passwordChange} />

          <button type='submit' className='btn bg-cyan-500 text-[#fefedf]'>
            Login
          </button>
        </form>
      </main>
    </div>
  )
}

export default Login