import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import Navbar from './Navbar'
import MobileNav from './MobileNav'

export default function Header() {
  return (
    <header className='py-8 xl:py-12 text-white'>
        <div className='container mx-auto flex justify-between items-center'>
            <Link href="/">
                <h1 className='text-4xl font-semibold'>
                    Mohan
                </h1>
            </Link>

            <div className="hidden xl:flex items-center gap-8">
                <Navbar />
                <Link href="/">
                    <Button className='bg-myGreen hover:bg-myGreen'>Available</Button>
                </Link>
            </div>

            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>
    </header>
  )
}
