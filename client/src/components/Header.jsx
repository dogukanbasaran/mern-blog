import {Navbar, TextInput, Button, Dropdown, Avatar, ToggleSwitch, DropdownItem, DarkThemeToggle} from 'flowbite-react';
import {AiOutlineSearch} from 'react-icons/ai';
import {FaMoon} from 'react-icons/fa';
import {Link, useLocation} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {toggleTheme} from '../redux/theme/themeSlice';




export default function Header() {

  const path = useLocation().pathname;
  const {currentUser} = useSelector(state => state.user);

  return (
    <header>
      <Navbar className='border-b-2' DarkThemeToggle>

        {/* LOGO */} 
       <div className='md:inline-block flex justify-center md:justify-start'>
          <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-2xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-green-500  to-blue-500 rounded-lg text-white'>Socio</span>
            Blog
          </Link>
       </div>

        {currentUser ? (
          <div className='inline md:hidden order-first'>
              <Dropdown 
                outline 
                color='purple'
                arrowIcon={false}
                inline
                label={
                  <Avatar alt='user' img={currentUser.profilePicture} rounded/>
                }
              >
                <Dropdown.Header>
                  <span className='font-bold text-[16px]'>{currentUser.username}</span>
                </Dropdown.Header>
                <Link to={"/dashboard?tab=profile"}>
                  <Dropdown.Item className='text-[16px]'>Profile</Dropdown.Item>
                </Link>
                <Dropdown.Divider/>
                <Dropdown.Item className='text-[16px]'>Sign out</Dropdown.Item>

                </Dropdown>
          </div>
        ):(
            <div className='inline md:hidden order-first'>
            <Link to="/sign-in">
              <Button color='purple'>Sign In</Button>
            </Link>
            </div>

        )}
        

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

            <div className='flex justify-center items-center'>
              <div className='hidden md:inline'>
                <DarkThemeToggle/>
              </div>
            </div>

            {currentUser ? (
                  <div className='hidden md:inline'>
                              <Dropdown 
                      outline 
                      color='purple'
                      arrowIcon={false}
                      inline
                      label={
                        <Avatar alt='user' img={currentUser.profilePicture} rounded/>
                      }
                      className='w-[250px]'
                    >
                      <Dropdown.Header>
                        <span className='font-bold text-[16px]'>{currentUser.username}</span>
                      </Dropdown.Header>
                      <Link to={"/dashboard?tab=profile"}>
                        <Dropdown.Item className='text-[16px]'>Profile</Dropdown.Item>
                      </Link>
                      <Dropdown.Divider/>
                      <Dropdown.Item className='text-[16px]'>Sign out</Dropdown.Item>

                      </Dropdown>
                  </div>
             ):(
            <div className='hidden md:inline'>
              <Link to="/sign-in">
                <Button color='purple'>Sign In</Button>
              </Link>
            </div>
             )}

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
