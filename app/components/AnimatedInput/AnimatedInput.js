// components/AnimatedInput.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedInput = ({ label, type = 'text', as = 'input', ...props }) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState(props.value || '');

  const handleChange = (e) => {
    setValue(e.target.value);
    if (props.onChange) {
      props.onChange(e);
    }
  };

  return (
    <div className="position-relative">
      {as === 'textarea' ? (
        <textarea
          {...props}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            if (e.target.value === '') {
              setFocused(false);
            }
          }}
          onChange={handleChange}
          className={`form-control p-3 ${focused || value ? 'border-primary' : ''}`}
        />
      ) : (
        <input
          {...props}
          type={type}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            if (e.target.value === '') {
              setFocused(false);
            }
          }}
          onChange={handleChange}
          className={`form-control p-3 ${focused || value ? 'border-primary' : ''}`}
        />
      )}
      <motion.label
        htmlFor={props.id}
        className={`position-absolute fw-regular top-0 translate-middle-y text-start px-2 py-1 bg-white border border-0 rounded ${
          focused || value ? 'text-secondary' : 'text-dark'
        }`}
        style={{ right: '15px', transition: '0.1s linear' , fontSize: `${focused || value ? '0.8rem' : '1rem'}` }}
        initial={{ y: '50%', opacity: 1 }}
        animate={{
          y: focused || value ? '-50%' : '50%',
          scale: focused || value ? 0.9 : 1,
          opacity: focused || value ? 1 : 1,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
          type: 'spring',
          stiffness: 400,
          damping: 17,
        }}
      >
        {label}
      </motion.label>
    </div>
  );
};

export default AnimatedInput;