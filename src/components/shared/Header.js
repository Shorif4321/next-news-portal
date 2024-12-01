import React from 'react';
import logoMain from '@/assets/logo.png'
import Image from 'next/image';
import { showCurrentDate } from '@/utilities/getCurrentDate';

const Header = () => {
    const date = showCurrentDate()
    return (
        <div className='text-center my-6'>
            <Image className='my-5 w-3/6 h-3/6 mx-auto' src={logoMain} width={500} height={500} alt='the new website' />
            <p>Journalist Without Fear or Favour</p>
            <p>{date} </p>
        </div>
    );
};

export default Header;