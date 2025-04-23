import React, { useState, useEffect } from 'react';

function ScrollEffect() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true); // スクロール位置が100pxを超えたら
      } else {
        setIsVisible(false); // スクロール位置が100px未満になったら
      }
    };

    window.addEventListener('scroll', handleScroll); // スクロールイベントを監視

    return () => {
      window.removeEventListener('scroll', handleScroll); // クリーンアップ
    };
  }, []);

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 1s ease', // フェードイン効果
      }}
    >
      <h1>スクロールで表示されるコンテンツ</h1>
    </div>
  );
}

export default ScrollEffect;
