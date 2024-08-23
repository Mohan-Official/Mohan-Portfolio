"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const MyProject = [
  {
    num: '1',
    category: 'Frontend',
    title: 'Restaurant Management',
    description: 'This is related to the restaurant management system, which is build using basic ideas.',
    stack: [{ name: "Html5" }, { name: "Css 3" }, { name: "Bootstrap" }],
    image: "/assets/Restaurant.png",
    live: "https://mohan-vinotharamkumar.github.io/Hotel-Management/",
    github: "https://github.com/Mohan-Vinotharamkumar/Hotel-Management.git",
  },
  {
    num: '2',
    category: 'Frontend',
    title: 'E-Commerce Website',
    description: 'This is related to the e-commerce management system, which is build using basic ideas.',
    stack: [{ name: "React-js" }, { name: "Css 3" }, { name: "Javascript" }, { name: "Firebase" }],
    image: "/assets/ecommerce.jpg",
    live: "",
    github: "",
  },
  {
    num: '3',
    category: 'Frontend',
    title: 'Weather App',
    description: 'This is related to the Weather Reporting system, which is build using basic weather api for getting details about weather.',
    stack: [{ name: "Html5" }, { name: "Css 3" }, { name: "React-js" }, { name: 'Javascript' }],
    image: "/assets/WeatherApp.jpg",
    live: "https://mohan-vinotharamkumar.github.io/Weather-App/",
    github: "https://github.com/Mohan-Vinotharamkumar/Weather-App.git",
  },
];

export default function Work() {
  const [project, setProject] = useState(MyProject[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(MyProject[currentIndex]);
    setCurrentIndex(currentIndex);
  };

  const handleNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' }
      }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              <div className='text-8xl leading-none font-extrabold text-white'>
                {project.num}
              </div>

              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-secondPrimary transition-all duration-500 capitalize'>
                {project.category} project
              </h2>

              <p className='text-white/60'>{project.description}</p>
              <ul>
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className='text-xl text-secondPrimary'>
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              <div className='border border-white/20'></div>

              <div className='flex items-center gap-4'>
                {project.live && (
                  <Link href={project.live} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider>
                      <Tooltip delayDuration={100}>
                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                          <BsArrowUpRight className='text-white text-3xl group-hover:text-secondPrimary' />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {project.github && (
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider>
                      <Tooltip delayDuration={100}>
                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                          <BsGithub className='text-white text-3xl group-hover:text-secondPrimary' />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className='w-full xl:w-[50%] relative'>
            {currentIndex > 0 && (
              <button
                onClick={handlePrev}
                className='absolute left-0 top-1/2 transform -translate-y-1/2 z-20 text-white text-3xl p-2 bg-gray-800/60 rounded-full'>
                <IoIosArrowBack />
              </button>
            )}
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[520px] mb-12'
              onSlideChange={handleSlideChange}
              onSwiper={(swiper) => setSwiperInstance(swiper)}
            >
              {MyProject.map((project, index) => {
                return (
                  <SwiperSlide key={index} className='w-full'>
                    <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-lg'>
                      <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                      <div className='relative w-full h-full'>
                        <Image
                          src={project.image}
                          fill
                          className='object-cover rounded-lg'
                          alt={`Image for ${project.title}`}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            {currentIndex < MyProject.length - 1 && (
              <button
                onClick={handleNext}
                className='absolute right-0 top-1/2 transform -translate-y-1/2 z-20 text-white text-3xl p-2 bg-gray-800/60 rounded-full'>
                <IoIosArrowForward />
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
