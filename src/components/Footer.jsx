import React from 'react';
import PIc from '../assets/online-shopping.png';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <div>
      <div className='border-b-2 border-neutral-600 text-2xl mb-20 mt-10 flex items-center justify-center py-2'>
        <motion.span
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1 }}
          style={{ fontWeight: '800' }}>PERSONAL TOUCH</motion.span>
      </div>

      <footer className="bg-slate-950 dark:bg-gray-900 shadow mb-2">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1 }}
          className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <img src={PIc} className="h-8 me-3" alt="E-STORE Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">
                  E-STORE
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">Contact</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="/" className="hover:underline">9142241549</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-black-900 uppercase dark:text-white">Follow Us</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://github.com/mukesh8945" target='_blank' className="hover:underline">Github</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/mukesh-kumar-455a07236/" target='_blank' className="hover:underline">LinkedIn</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">Email</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="mailto:yryadavmukesh.com" className="hover:underline">yryadavmukesh@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024 E-STORE. All Rights Reserved.
            </span>
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              Disclaimer: This site is for practice purposes only. No actual products are being sold.
            </span>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}

export default Footer;
