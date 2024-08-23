"use client";
import React from 'react'
import CountUp from 'react-countup'

const StatisticData = [
    {
        num : 0.9,
        text : "Years of experience"
    },
    {
        num : 2,
        text : "Project on-going"
    },
    {
        num : 6,
        text : "Self Project"
    },
    {
        num : 5,
        text : "Technologies know"
    },
]
export default function Statistics() {
  return (
    <section className='pt-4 pb-12 xl:pt-0 xl:pb-20'>
        <div className="container mx-auto">
            <div className='flex flex-wrap gap-6 max-w-[80vm] mx-auto xl:max-w-none'>
                {
                    StatisticData.map((item,index)=>{
                        return(
                            <div key={index} className='flex-1 flex gap-4 items-center justify-center xl:justify-start'>
                                <CountUp
                                    end={item.num}
                                    duration={5}
                                    delay={2}
                                    className='text-3xl xl:text-5xl font-extrabold'
                                />
                                <p className={`${item.text.length < 15 ? "max-w-[100px]":"max-w-[150px]"} leading-snug text-white/80`}>
                                    {item.text}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}
