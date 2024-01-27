import React from 'react'
import {Footer} from 'flowbite-react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";


export default function Footerr() {
  return (
    <Footer container className='border border-t-8 rounded-md border-purple-600 flex-col'>
      <div className='flex justify-between w-full'>

        <div>
          <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-2xl font-semibold dark:text-white'>
              <span className='px-2 py-1 bg-gradient-to-r from-green-500  to-blue-500 rounded-lg text-white'>Socio</span>
              Blog
            </Link>
        </div>
      
        <div>
            <Footer.Title title='Follow Us' className='text-[20px]'/>
            <Footer.LinkGroup>
              <Footer.Link href='https://www.instagram.com/dogukanbasarannn/' target='_blank' rel='noopener noreferrer'>
                <FaInstagram className='text-[24px]'/>
              </Footer.Link>

              <Footer.Link href='https://www.instagram.com/dogukanbasarannn/' target='_blank' rel='noopener noreferrer'>
                <FaYoutube className='text-[24px]'/>
              </Footer.Link>

              <Footer.Link href='https://www.instagram.com/dogukanbasarannn/' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin className='text-[24px]'/>
              </Footer.Link>
            </Footer.LinkGroup>
        </div>

      </div>
    
      <Footer.Divider/>

      <div className='w-full font-semibold flex justify-center'>
        <Footer.Copyright className='text-[16px]' by='Dogukan Basaran.' year={new Date().getFullYear()}/>
      </div>

    </Footer>
  )
}
