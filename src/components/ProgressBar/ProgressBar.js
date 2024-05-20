// src/components/ProgressBar.js

import React, { useEffect, useState } from 'react';
import './ProgressBar.css';

const ProgressBar = ({ completed, color = 'green' }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    let animationFrame;
    const animate = () => {
      setWidth((prevWidth) => {
        if (prevWidth < completed) {
          animationFrame = requestAnimationFrame(animate);
          return prevWidth + 1; // 每次增加 1%
        } else {
          cancelAnimationFrame(animationFrame);
          return completed;
        }
      });
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [completed]);

  const containerStyles = {
    height: '20px',
    width: '300px',
    backgroundColor: '#e0e0df',
    borderRadius: '50px',
    overflow: 'hidden', // 确保内容不溢出
    margin: '50px 0'
  };

  const fillerStyles = { 
    height: '100%',
    width: `${width}%`,
    backgroundColor: color,
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 0.2s ease-in-out' // 添加平滑过渡效果
  };

  const labelStyles = {
    padding: '5px',
    color: 'white',
    fontWeight: 'bold'
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${width}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;