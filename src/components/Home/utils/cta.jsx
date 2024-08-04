import React from 'react';
import CTAImg from '../../../assets/images/cta.png';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <div className='min-h-[70vh] flex flex-col md:flex-row justify-around w-full items-center px-4 md:px-8 lg:px-16 py-12 '>
      <motion.section 
        className='flex flex-col items-start justify-start gap-y-6 mb-8 md:mb-0'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className='text-3xl md:text-4xl lg:text-5xl font-bold max-w-2xl leading-tight'
          whileHover={{ scale: 1.05 }}
        >
          Join Our Nipix Technology Community
        </motion.h1>
        <motion.p 
          className='max-w-xl text-lg md:text-xl lg:text-2xl leading-relaxed'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Be a part of a large community for young professionals where you can network, learn, and grow together. Get access to exclusive resources, mentorship, and more.
        </motion.p>
        <Button 
          variant="contained" 
          color="primary"
          component={motion.div}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Join Now
        </Button>
      </motion.section>
      <motion.section 
        className='max-w-xs md:max-w-md lg:max-w-lg'
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src={CTAImg} alt='cta placeholder' className='h-full w-full object-cover rounded-lg shadow-lg' />
      </motion.section>
    </div>
  );
}

export default CTA;
