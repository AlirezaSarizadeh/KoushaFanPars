'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedInput = ({ label, type = 'text', as = 'input', value = '', onChange, ...props }) => {
  const [focused, setFocused] = useState(false);

  // ✅ Watch parent value to handle reset correctly
  useEffect(() => {
    if (!value) setFocused(false);
  }, [value]);

  const handleFocus = () => setFocused(true);
  const handleBlur = (e) => {
    if (e.target.value === '') setFocused(false);
  };

  const InputTag = as === 'textarea' ? 'textarea' : 'input';

  return (
    <div className="position-relative">
      <InputTag
        {...props}
        type={as === 'textarea' ? undefined : type}
        value={value}                 // ✅ parent-controlled
        onChange={onChange}           // ✅ directly call parent handler
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`form-control p-3 ${focused || value ? 'border-primary' : ''}`}
        style={{ border: '2px solid #49a7db94' }}
      />

      <motion.label
        htmlFor={props.id}
        className={`position-absolute fw-regular top-0 translate-middle-y text-start px-2 py-1 bg-white border border-0 rounded ${
          focused || value ? 'text-secondary' : 'text-dark'
        }`}
        style={{
          right: '15px',
          transition: '0.1s linear',
          fontSize: `${focused || value ? '0.8rem' : '1rem'}`
        }}
        initial={{ y: '50%', opacity: 1 }}
        animate={{
          y: focused || value ? '-50%' : '50%',
          scale: focused || value ? 0.9 : 1,
          opacity: 1
        }}
        transition={{ duration: 0.3, ease: 'easeInOut', type: 'spring', stiffness: 400, damping: 17 }}
      >
        {label}
      </motion.label>
    </div>
  );
};

export default AnimatedInput;
