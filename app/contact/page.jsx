"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button'; // Ensure this is a default export
import { Input } from '@/components/ui/input';   // Ensure this is a named export
import { Textarea } from '@/components/ui/textarea'; // Ensure this is a named export
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'; // Ensure all are named exports
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';

const InfoDetails = [
  {
    icon: <FaPhone />,
    title: "Phone",
    description: "+91-8870164172"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "navaneethamohan2002@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "4A, Jawahar Sanga Kilamel Cross Street, Chokkalingapuram, Aruppukottai - 626 101"
  }
];

export default function Contact() {
  // State to manage form values
  const [formValues, setFormValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  // State to manage dialog visibility
  const [messageSent, setMessageSent] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  // Handle select change
  const handleSelectChange = (value) => {
    setFormValues(prevValues => ({
      ...prevValues,
      service: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "message send successfully!!",
      showConfirmButton: false,
      timer: 2000
    });
    // Reset form values
    setFormValues({
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });

    // Show the dialog
    setMessageSent(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
        className='py-6'
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            <div className='xl:w-[64%] order-2 xl:order-none'>
              <form onSubmit={handleSubmit} className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
                <h3 className='text-4xl text-secondPrimary'>
                  Let's work together
                </h3>
                <p className='text-white/60'>
                  Even if there is 1% chance sometimes that's good enough to move forward.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <Input name="firstname" value={formValues.firstname} onChange={handleChange} placeholder="Firstname" />
                  <Input name="lastname" value={formValues.lastname} onChange={handleChange} placeholder="Lastname" />
                  <Input name="email" type="email" value={formValues.email} onChange={handleChange} placeholder="Email address" />
                  <Input name="phone" type="phone" value={formValues.phone} onChange={handleChange} placeholder="Phone number" />
                </div>

                <Select onValueChange={handleSelectChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a Service from my side</SelectLabel>
                      <SelectItem value="web-development">Web Development</SelectItem>
                      <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                      <SelectItem value="bug-fixing">Bug Fixing</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Textarea name="message" value={formValues.message} onChange={handleChange} className='h-[200px]' placeholder="Type your message here..." />

                <Button type="submit" size="md" className="h-10 max-w-40">
                  Send message
                </Button>
              </form>
            </div>

            <div className='flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
              <ul className='flex flex-col gap-10'>
                {
                  InfoDetails.map((item, index) => (
                    <li key={index} className='flex items-center gap-6'>
                      <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-secondPrimary rounded-md flex items-center justify-center'>
                        <div className='text-[28px]'>
                          {item.icon}
                        </div>
                      </div>
                      <div className='flex-1'>
                        <p className='text-white/60'>{item.title}</p>
                        <h3 className='text-xl'>{item.description}</h3>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
