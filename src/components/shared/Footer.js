import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedin, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';

const navItems = [
    {
        route: 'Home',
        path: '/'
    },
    {
        route: 'Pages',
        path: '/pages'
    },
    {
        route: 'Categories',
        path: '/categories'
    },
    {
        route: 'About',
        path: '/about'
    },
    {
        route: 'Contact',
        path: '/contact'
    },
]

const Footer = () => {
    return (
        <div className='bg-black text-white px-2 py-7 md:p-12'>
            <div className="flex justify-center">
                <FontAwesomeIcon className='w-5 h-5 ml-3' icon={faFacebookF} />
                <FontAwesomeIcon className='w-5 h-5 ml-3' icon={faYoutube} />
                <FontAwesomeIcon className='w-5 h-5 ml-3' icon={faTwitter} />
                <FontAwesomeIcon className='w-5 h-5 ml-3' icon={faLinkedin} />
                <FontAwesomeIcon className='w-5 h-5 ml-3' icon={faWhatsapp} />
            </div>

            <div className="flex justify-center mt-3">
                <ul className="menu menu-horizontal px-1">
                    {
                        navItems.map((item) => <Link href={item.path} key={item.path}><li><a className='uppercase'>{item.route}</a></li></Link>)
                    }
                </ul>
            </div>

            <div className='text-center text-neutral-500	'>
                <p>@2024 The News Portal. Design by Developer Shoriful Islaml</p>
            </div>
        </div>
    );
};

export default Footer;