import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from "@/assets/logo.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedin, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Header from './Header';

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


const Navbar = () => {
    return (
        <div>
            <Header></Header>
            <div className="navbar bg-black text-white px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu bg-black menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">

                            {
                                navItems.map((item) => <Link href={item.path} key={item.path}><li><a className='uppercase'>{item.route}</a></li></Link>)
                            }

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl p-0">
                        <Link href='/'>
                            <Image src={logo} width={100} height={100} alt='logo image' />
                        </Link>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {
                            navItems.map((item) => <Link href={item.path} key={item}><li><a className='uppercase'>{item.route}</a></li></Link>)
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <FontAwesomeIcon className='w-5 h-5 ml-3' icon={faFacebookF} />
                    <FontAwesomeIcon className='w-5 h-5 ml-3' icon={faYoutube} />
                    <FontAwesomeIcon className='w-5 h-5 ml-3' icon={faTwitter} />
                    <FontAwesomeIcon className='w-5 h-5 ml-3' icon={faLinkedin} />
                    <FontAwesomeIcon className='w-5 h-5 ml-3' icon={faWhatsapp} />
                </div>
            </div>

        </div>
    );
};

export default Navbar;