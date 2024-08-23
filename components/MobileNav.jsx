"use client";

import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci'

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
export default function MobileNav() {
    const pathname = usePathname();
  return (
    <nav>
      <Sheet>
        <SheetTrigger className='flex justify-center items-center'>
            <CiMenuFries className='text-[32px] text-secondPrimary' />
        </SheetTrigger>
        <SheetContent className='flex flex-col'>
            <div className='mt-32 mb-10 text-center text-2xl'>
                <Link href='/'>
                    <h1 className='text-4xl text-secondPrimary font-semibold'>
                        MNK
                    </h1>
                </Link>
            </div>
            <nav className='flex flex-col justify-center items-center gap-8'>
                {
                    Links.map((link,index)=>{
                        return(
                            <Link href={link.path} key={index} className={`${link.path=== pathname && "text-secondPrimary border-b-2 border-secondPrimary"} text-xl hover: text-white transition-all`}>
                                {link.name}
                            </Link>
                        )
                    })
                }
            </nav>
        </SheetContent>
      </Sheet>
    </nav>
  )
}
