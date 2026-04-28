import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='text-center mx-auto'>
         <Image src={logo} className='mx-auto' alt=''></Image>
         <h2>Journalism Without Fear or Favour</h2>
         <p>{format(new Date(), "EEEE, MMMM d, yyyy")}</p>
        </div>
    );
};

export default Header;Header