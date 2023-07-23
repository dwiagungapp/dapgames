import React from "react";
import { motion } from 'framer-motion';

const Hero = () => {
return (
<>

   <section className="pt-14 pb-10 bg-cover bg-center bg-hero-image font-poppins border-b-2">
    <div className="px-12 p-0 md:p-12 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
        <h1 className="bg-gray-800 rounded-lg border-2 border-b-gray-50 p-4 mb-8 text-2xl font-extrabold leading-none tracking-normal text-white md:text-6xl md:tracking-tight">
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Discover
      </motion.span>{' '}
      <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-[#ff8f00] to-red-500 lg:inline">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
  transition={{ delay: 1, duration: 0.5 }}>
          a world of games
        </motion.span>
      </span>{' '}
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        wonders at your fingertips!
      </motion.span>
    </h1>
            <p className="py-4 px-2 mb-8 text-sm text-white md:text-xl lg:px-24 bg-gray-800 rounded-lg border-2 border-b-gray-50">
            Every day we find the best Android games for you. And these are not only top apps, but also interesting newest worthy of attention.
            </p>
        </div>
        </div>
</section>
   </>
  );
};
export default Hero;