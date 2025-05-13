import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex items-center py-5 fixed top-0 z-20 bg-primary">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setToggle(false);
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-9 h-9 rounded-full bg-[#915EFF] flex justify-center items-center"
          >
            <span className="text-white text-[18px] font-bold">Y</span>
          </motion.div>
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Your Name &nbsp;
            <span className="sm:block hidden">| Portfolio</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {['home', 'about', 'projects', 'blog', 'testimonials', 'contact'].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
            >
              <a href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
            </motion.li>
          ))}
          <li>
            <a
              href="/Chinmay_Solanki_Resume.pdf"
              download
              className="ml-4 px-4 py-2 bg-[#915EFF] text-white rounded-lg font-bold shadow-md hover:bg-[#7a4fdc] transition-colors"
            >
              Download Resume
            </a>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <motion.div
            whileTap={{ scale: 0.9 }}
            onClick={() => setToggle(!toggle)}
            className="w-10 h-10 rounded-full bg-[#915EFF] flex justify-center items-center cursor-pointer"
          >
            {toggle ? (
              <XMarkIcon className="w-6 h-6 text-white" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-white" />
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: toggle ? 1 : 0, x: toggle ? 0 : 20 }}
            transition={{ duration: 0.3 }}
            className={`${
              toggle ? 'flex' : 'hidden'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {['home', 'about', 'projects', 'blog', 'testimonials', 'contact'].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  className="font-poppins font-medium cursor-pointer text-[16px] text-white"
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${item}`}>{item}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 