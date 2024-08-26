"use client";

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ProfileSection() {
  return (
    <div className='w-full h-full relative'>
        <motion.div 
            initial={{opacity:0}}
            animate={{
                opacity: 1,
                transition: {delay: 2, duration: 0.4, ease: "easeIn"}
            }}
        >
            <motion.div 
                initial={{opacity:0}}
                animate={{
                    opacity: 1,
                    transition: {delay: 2.4, duration: 0.4, ease: "easeInOut"}
                }}
                className='w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten'>
                <Image
                    // src="/assets/NewProfile.jpeg"
                    src="/assets/newprofile.jpeg"
                    priority
                    quality={100}
                    fill
                    alt="Profile image"
                    className='object-contain rounded-full'
                />
            </motion.div>
        </motion.div>
    </div>
  )
}
