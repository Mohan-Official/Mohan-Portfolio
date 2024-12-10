"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsArrowDownRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import ModalForm from '../../components/ModalForm';
import { GiCrossedBones } from "react-icons/gi";

const myServices = [
  {
    num: '1.',
    title: 'Web Development',
    description: `
      I offer comprehensive web development services tailored to meet your business needs.
      From crafting stunning, responsive websites to implementing robust backend solutions,
      I specialize in creating seamless user experiences and scalable systems.
      My goal is to provide a solution that not only meets your requirements but also enhances your online presence and drives your success.
    `,
    href: "/contact",
  },
  {
    num: '2.',
    title: 'UI / UX Design',
    description: `
      I provide expert UI/UX design services that focus on creating intuitive and engaging user experiences.
      By combining aesthetics with functionality,
      I design user interfaces that are not only visually appealing but also easy to navigate.
      From wireframes and prototypes to final designs, I work to craft solutions that
      captivate users and drive meaningful interactions.
    `,
    href: "/contact",
  },
  {
    num: '3.',
    title: 'Back-end Development',
    description: `
      I offer expert backend development services designed to build scalable, secure, and
      efficient server-side solutions. My focus is on creating robust architectures and implementing
      reliable data management systems to support your application’s functionality.
      I deliver solutions that not only meet your technical requirements but also enhance overall
      system stability and responsiveness.
    `,
    href: "/contact",
  },
];

export default function Services() {

  return (
    <div>
      <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' }
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
            {myServices.map((service, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col justify-between items-center hover:text-secondPrimary cursor-pointer group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl">{service.num}</div>
                  <Link
                    href={service.href}
                    className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-secondPrimary transition-all duration-500 flex justify-center items-center hover:rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-1xl" />
                  </Link>
                </div>

                <h2 className="text-[42px] font-bold">{service.title}</h2>
                <p className="text-white/60">{service.description}</p>
                <button
                  style={{ height: '3rem', width: '15rem' }}
                  className="border-2 mt-4 border-secondPrimary group-hover:bg-secondPrimary group-hover:text-white group-hover:border-transparent transition-all duration-500"
                >
                  <Link href={service.href}>
                    Book a Service
                  </Link>
                </button>
                <div className="border-b border-white/20 w-full mt-6"></div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
