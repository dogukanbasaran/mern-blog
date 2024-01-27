import {Navbar, TextInput, Button} from 'flowbite-react';
import {AiOutlineSearch} from 'react-icons/ai';
import {FaMoon} from 'react-icons/fa';
import { MdAccountCircle } from "react-icons/md";
import {Link, useLocation} from 'react-router-dom';


export default function Header() {

  const path = useLocation().pathname;

  return (
    <header>
      <Navbar className='border-b-2'>

        {/* LOGO */} 
       <div className='md:inline-block flex justify-center md:justify-start'>
          <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-2xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-green-500  to-blue-500 rounded-lg text-white'>Socio</span>
            Blog
          </Link>
       </div>


        <div className='inline md:hidden order-first'>
              <Link to="/sign-in">
                <Button outline color='purple'>Sign In</Button>
              </Link>
        </div>

      

        <Navbar.Toggle/>

        <Navbar.Collapse className=''>

            <div className='flex flex-col md:items-center md:flex-row md:gap-4 text-[16px]'>
              <Navbar.Link active={path === "/"} as={'div'} className='border hover:bg-purple-600 rounded-md rounded-b-none md:hover:bg-transparent md:rounded-none md:border-none'>
                <Link to='/'>Home</Link>
              </Navbar.Link>
              <Navbar.Link active={path === "/about"} as={'div'} className='border hover:bg-purple-600 rounded-none md:hover:bg-transparent md:rounded-none md:border-none'>
                <Link to='/about'>About</Link>
              </Navbar.Link>
              <Navbar.Link active={path === "/posts"} as={'div'} className='border hover:bg-purple-600 rounded-b-md md:hover:bg-transparent md:rounded-none md:border-none'>
                <Link to='/posts'>Posts</Link>
              </Navbar.Link>
            </div>

            <div className='hidden md:inline'>
              <Link to="/sign-in">
                <Button outline color='purple'>Sign In</Button>
              </Link>
            </div>

            <div className='inline md:hidden mt-4'>
                <form>
                  <TextInput 
                  type='text' 
                  placeholder='Search...'
                  rightIcon={AiOutlineSearch}
                  className=''
                  />
              </form>
            </div>
        </Navbar.Collapse>

      </Navbar>
    </header>
  )
}
