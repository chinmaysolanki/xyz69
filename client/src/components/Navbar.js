import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex items-center py-5 fixed top-0 z-20 citadel-nav">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6">
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
            className="w-9 h-9 rounded-full bg-gradient-to-r from-citadel-accent-blue to-citadel-accent-cyan flex justify-center items-center shadow-lg shadow-citadel-glow-cyan citadel-panel"
          >
            <span className="text-black text-[18px] font-bold">C</span>
          </motion.div>
          <p className="glow-text-cyan text-[18px] font-bold cursor-pointer flex">
            Chinmay Solanki &nbsp;
            <span className="sm:block hidden text-citadel-text-secondary">| Data Citadel</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          {['home', 'about', 'projects', 'blog', 'contact'].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              className="citadel-nav-item text-[18px] font-medium cursor-pointer"
            >
              <a href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
            </motion.li>
          ))}
          <li>
            <a
              href="/Chinmay_Solanki_Resume.pdf"
              download
              className="ml-4 citadel-button"
            >
              Download Resume
            </a>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <motion.div
            whileTap={{ scale: 0.9 }}
            onClick={() => setToggle(!toggle)}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-citadel-accent-blue to-citadel-accent-cyan flex justify-center items-center cursor-pointer shadow-lg shadow-citadel-glow-cyan citadel-panel"
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
            } p-6 citadel-panel absolute top-20 right-0 mx-4 my-2 min-w-[180px] z-10 shadow-xl shadow-citadel-glow-blue`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {['home', 'about', 'projects', 'blog', 'contact'].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  className="font-medium cursor-pointer text-[16px] citadel-nav-item"
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
                </motion.li>
              ))}
              <motion.li className="mt-4 w-full">
                <a
                  href="/Chinmay_Solanki_Resume.pdf"
                  download
                  className="w-full citadel-button text-center block"
                  onClick={() => setToggle(false)}
                >
                  Download Resume
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 