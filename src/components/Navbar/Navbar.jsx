import React from 'react'
import { IoMdMenu } from "react-icons/io";
import {motion} from "framer-motion";
const NavbarMenu = [
    {
        id : 1,
        title : "Home",
        path : "/",
    },
    {
        id : 2,
        title : "Services",
        path : "#",
    },
    {
        id : 3,
        title : "About Us",
        path : "#",
    },
    {
        id : 4,
        title : "Our Team",
        path : "#",
    },
    {
        id : 5,
        title : "Contact Us",
        path : "#",
    },
]

const Navbar = () => {
  return  <nav className="relative z-20">
    <motion.div 
        initial = {{opacity:0,y:-50}}
        animate = {{opacity:1,y:0}}
        transition = {{duration:0.3 ,delay:0.6}}
        className="container py-10 flex justify-between items-center">
        {/* {Logo section} */}
        <div>
            <h1 className="font-bold text-2xl">The Development Journey</h1>
        </div>

        {/* {Menu Section} */}
        <div className="hidden lg:block">
            <ul className="flex items-center gap-3">
                {NavbarMenu.map((menu)=>(
                    <li key={menu.id}>
                        <a href={menu.path} className="inline-block py-2 px-3 hover:text-secondary hover:underline relative group ">
                            
                            {menu.title}
                        </a>
                    </li>    
                ))}

                <button className="primary-btn">Sign In</button>
            </ul>
        </div>

        {/* {Mobile hamburger menu section} */}
        <div className="lg:hidden">
                <IoMdMenu className="text-4xl"/>
        </div>
    </motion.div>
  </nav>; 
}

export default Navbar
