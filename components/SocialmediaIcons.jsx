import React from 'react'
import Link from 'next/link'
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa'
import { Tooltip } from '@mui/material'

const IconsLink = [
    {
        icon : <FaGithub />,
        path : "https://github.com/Mohan-Vinotharamkumar",
        text : 'Github'
    },
    {
        icon : <FaInstagram />,
        path : "",
        text : 'Instagram'
    },
    {
        icon : <FaLinkedin />,
        path : "https://www.linkedin.com/in/mohana-navaneetha-krishnan-r-920198204/",
        text : 'Linkedin'
    },
    // {
    //     icon : <FaTwitter />,
    //     path : "",
    // },
    {
        icon : <FaYoutube />,
        path : "",
        text : 'Youtube'
    },
    // {
    //     icon : <FaGithub />,
    //     path : "",
    // },
]
export default function SocialmediaIcons({containerStyle, iconStyle}) {
  return (
    <div className={containerStyle}>
      {        
        IconsLink.map((icon,index)=>{
            return(
                <Tooltip title={icon.text}  key={index}>
                    <Link href={icon.icon} target='_blank' className={iconStyle}>
                        {icon.icon}
                    </Link>
                </Tooltip>
            )
        })
      }
    </div>
  )
}
