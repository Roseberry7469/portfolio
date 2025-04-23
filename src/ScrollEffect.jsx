import React, { useState, useEffect } from 'react';

function ScrollEffect() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll); 

    return () => {
      window.removeEventListener('scroll', handleScroll); 
    };
  }, []);

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 1s ease', 
      }}
    >
      <h1>スクロールで表示されるコンテンツ</h1>
    </div>
  );
}

export default ScrollEffect;
