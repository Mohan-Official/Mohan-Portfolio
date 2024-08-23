"use client"

import React from 'react'
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPython, FaAngular} from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip,TooltipContent,TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const About = {
  title : 'About Myself',
  description : "I've finished my Bachelor's degree from MSEC also i've did my additional course on Web-Development. I've lot of intrest in improving myself on web-development area.",
  Info : [
    { 
      fieldName : "Name",
      fieldValue : "Mohan R"
    },
    { 
      fieldName : "Mobile",
      fieldValue : "+91-8870164172"
    },
    { 
      fieldName : "Linked-In",
      fieldValue : "Mohan Vinotharamkumar"
    },
    { 
      fieldName : "Nationality",
      fieldValue : "Indian"
    },
    { 
      fieldName : "Mail",
      fieldValue : "navaneethamohan2002@gmail.com"
    },
    { 
      fieldName : "Freelancing",
      fieldValue : "Available"
    },
    { 
      fieldName : "Language",
      fieldValue : "English, Tamil, Kannada"
    },
  ]
}

const Experience = {
  title : "My Experience",
  description : "Currently I'm working in Indium Softwate as a Graduate Engineer Trainee.",
  items :
  [
    {
      company : "Indium Software's",
      position : "Graduate Engineer Trainee",
      duration : "2023 - present"
    }
  ]
}

const Education = {
  title : "My Education",
  description : "Education is a tool to sharpen your brain and eyes to see the difference between black and white.",
  items :
  [
    {
      company : "Online Course",
      position : "Full Stack Web Development Bootcamp",
      duration : "2024"
    },
    {
      company : "Coding Ninjas",
      position : "Web Development Bootcamp",
      duration : "2024"
    },
    {
      company : "Online Course",
      position : "Front-End Development Course",
      duration : "2023"
    },
    {
      company : "Online Course",
      position : "Back-End Development using Django",
      duration : "2023"
    },
    {
      company : "Online Course",
      position : "Node-js",
      duration : "2023"
    },
    {
      company : "Inter College Course",
      position : "Web Development Using MERN Stack",
      duration : "2021"
    },
    {
      company : "Applied Electives",
      position : "Machine Learning",
      duration : "2024"
    },
    {
      company : "College",
      position : "Bachelor's Degree in Mechanical Engineering",
      duration : "2019 - 2023"
    }
  ]
}

const MySkills = {
  title : "My Skills",
  description : "These are my Major skill-sets which i've developed through out my academic and in my work field.",
  skillsets : [
    {
      icon : <FaHtml5 />,
      name : "html 5"
    },
    {
      icon : <FaCss3 />,
      name : "css 3"
    },
    {
      icon : <FaJs />,
      name : "javascript"
    },
    {
      icon : <FaReact />,
      name : "react.js"
    },
    {
      icon : <FaNodeJs />,
      name : "node-js"
    },
    {
      icon : <FaFigma />,
      name : "figma"
    },
    {
      icon : <FaPython />,
      name : "python"
    },
    {
      icon : <SiTailwindcss />,
      name : "tailwind-css"
    },
    {
      icon : <FaAngular />,
      name : "angular"
    }
  ]
}

export default function Resume() {
  return (
    <motion.div
      initial={{opacity:0}}
      animate = {{
        opacity:1,
        transition: {delay:2.4, duration: 0.4, ease:'easeIn'}
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList
            className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6"
          >
            <TabsTrigger value="experience">
              Experience
            </TabsTrigger>
            <TabsTrigger value="education">
              Education
            </TabsTrigger>
            <TabsTrigger value="skills">
              Skills
            </TabsTrigger>
            <TabsTrigger value="about">
              About Me
            </TabsTrigger>
          </TabsList>

          <div
            className='min-h-[70vh] w-full'
          >
            <TabsContent value='experience' className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>
                  {Experience.title}
                </h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {Experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                      {Experience.items.map((item,index)=>
                      {
                        return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-secondPrimary'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[64px] h-[6px] rounded-full bg-secondPrimary'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      })}
                    </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value='education' className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>
                    {Education.title}
                  </h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                    {Education.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                      <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                        {Education.items.map((item,index)=>
                        {
                          return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                            <span className='text-secondPrimary'>{item.duration}</span>
                            <h3 className='text-xl max-w-[260px] min-h-[90px] text-center lg:text-left'>{item.position}</h3>
                            <div className='flex items-center gap-3'>
                              <span className='w-[64px] h-[6px] rounded-full bg-secondPrimary'></span>
                              <p className='text-white/60'>{item.company}</p>
                            </div>
                          </li>
                        })}
                      </ul>
                  </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value='skills' className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{MySkills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{MySkills.description}</p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                  {
                    MySkills.skillsets.map((skill,index)=>
                    {
                      return <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[120px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                              <div className='text-4xl group-hover:text-secondPrimary transition-all duration-500'>
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='capitalize'>
                                {skill.name}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    })
                  }
                </ul>
              </div>
            </TabsContent>
            <TabsContent value='about' className="w-full text-center xl:text-left">
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{About.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{About.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {
                    About.Info.map((item,index)=>
                    {
                      return (
                        <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                          <span className='text-white/60'>{item.fieldName}</span>
                          <span className={`text-sm ${item.fieldValue === 'Available' ? 'text-myGreen' : 'text-defaultColor'}`}>
                            {item.fieldValue}
                          </span>                        
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}
