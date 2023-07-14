import React from "react";
import { motion } from 'framer-motion';

const Hero = () => {
return (
<>

   <section className="pt-14 pb-10 bg-cover bg-center bg-hero-image font-poppins">
    <div className="px-12 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
        <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-white md:text-6xl md:tracking-tight">
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Discover
      </motion.span>{' '}
      <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-[#ff8f00] to-red-500 lg:inline">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
  transition={{ delay: 1, duration: 0.5 }}>
          a world of gaming
        </motion.span>
      </span>{' '}
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        wonders at your fingertips!
      </motion.span>
    </h1>
            <p className="px-0 mb-8 text-lg text-white md:text-xl lg:px-24">
            Every day we find the best Android games for you. And these are not only top apps, but also interesting newest worthy of attention.
            </p>
        </div>
        </div>
</section>
   </>
  );
};
export default Hero;