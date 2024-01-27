import {Button, TextInput, Label} from 'flowbite-react';

import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className="flex justify-center items-center border py-20">      
        <div className="border h-[500px] w-[500px] flex flex-col justify-center">

        <Link to="/" className='self-center whitespace-nowrap text-xl sm:text-2xl font-semibold dark:text-white mb-5'>
          <span className='px-2 py-1 bg-gradient-to-r from-orange-500  to-pink-500 rounded-lg text-white'>Socio</span>
          Blog
        </Link>

         <form className="flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col justify-center items-center gap-4 w-full">
            <div className='w-2/4'>
              <Label id='username' value='Username'/>
              <TextInput id='username' type="text" required/>
            </div>
         
            <div className='w-2/4'>
              <Label id='email' value='E-mail'/>
              <TextInput id='email' type="email" required/>
            </div>

            <div className='w-2/4'>
              <Label id='password' value='Password'/>
              <TextInput id='password' type="password" required/>
            </div>

            <Button color='purple' className='px-2 rounded-md outline-none w-2/4'>Sign Up</Button>
          </div>
         </form>

         <span className='mt-5 text-center'>Have you an account? <Link to="/sign-in" className='text-blue-700 font-semibold'>Sign In</Link></span>

        </div>
    </div>
  )
}
