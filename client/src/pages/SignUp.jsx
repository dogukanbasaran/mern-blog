import {Button, TextInput, Label, Alert, Spinner, Toast} from 'flowbite-react';
import { HiCheck, HiExclamation} from 'react-icons/hi';
import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {

  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [succesMessage, setSuccessMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password){
      return setErrorMessage("Please fill out all fields.");
    }
    try{
      setLoading(true);
      setErrorMessage(null);

      const res = await fetch('/server/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if(data.success = false){
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok){
      setTimeout(() => {
          navigate('/sign-in');      
      }, 5000);
      return setSuccessMessage("User has been created, successfully.");
    }
      
    }catch(error){
      setErrorMessage(error.message);
      setLoading(false);
     
    }
  }


  return (
    <div className="flex justify-center items-center border py-20">      
        <div className="h-[500px] w-[500px] flex flex-col justify-center">

        <Link to="/" className='self-center whitespace-nowrap text-xl sm:text-2xl font-semibold dark:text-white mb-5'>
          <span className='px-2 py-1 bg-gradient-to-r from-orange-500  to-pink-500 rounded-lg text-white'>Socio</span>
          Blog
        </Link>

         <form className="flex flex-col items-center justify-center gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center items-center gap-4 w-full">
            <div className='w-3/4'>
              <Label id='username' value='Username'/>
              <TextInput id='username' type="text" onChange={handleChange}/>
            </div>
         
            <div className='w-3/4'>
              <Label id='email' value='E-mail'/>
              <TextInput id='email' type="email" onChange={handleChange}/>
            </div>

            <div className='w-3/4'>
              <Label id='password' value='Password'/>
              <TextInput id='password' type="password" onChange={handleChange}/>
            </div>

            <Button color='purple' className='px-2 rounded-md outline-none w-3/4' type='submit' disabled={loading}>{loading ? (<><Spinner size='sm'/> <span className='pl-2'>Loading...</span></>) : 'Sign Up'}</Button>
          </div>
         </form>

         <span className='mt-5 text-center'>Have you an account? <Link to="/sign-in" className='text-blue-700 font-semibold'>Sign In</Link></span>
         {
          errorMessage && (
            <Toast className='fixed right-5 bottom-5'>
                <HiExclamation className="h-5 w-5 text-red-600" />
                <div className="pl-4 text-sm font-normal">{errorMessage}</div>
                <Toast.Toggle/>
            </Toast>
          )
         }

        {
         succesMessage && (
            <Toast className='fixed right-5 bottom-5'>
                <HiCheck className="h-5 w-5 text-green-600" />
                <div className="pl-4 text-sm font-normal">{succesMessage}</div>
                <Toast.Toggle/>
            </Toast>
          )
        }

        </div>
    </div>
  )
}
