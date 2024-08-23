'use client'; 

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Links = [
    {
        name : 'Home',
        path : '/',
    },
    {
        name : 'Services',
        path : '/services',
    },
    {
        name : 'Resume',
        path : '/resume',
    },
    {
        name : 'Work',
        path : '/work',
    },
    {
        name : 'Contact',
        path : '/contact',
    }
]

export default function Navbar() 
{
    const pathname = usePathname();
    
  return (    
    <nav className='flex gap-8'>
        {
            Links.map((link,index) => {
                return (
                    <Link href={link.path} key={index} className={`${link.path === pathname && "text-secondPrimary border-b-2 border-secondPrimary"} hover:text-secondPrimary transition-all`}>
                        {link.name}
                    </Link>
                );
            })
        }
    </nav>
  )
}
