import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const opacityValue = 1 - scrollPosition / 500; 
      setOpacity(opacityValue > 0 ? opacityValue : 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          opacity: opacity, 
          transition: 'opacity 0.3s ease-out', 
        }}
      >
        <h1>Appleのようなスクロールでフェードアウト</h1>
        <p>スクロールすると、このテキストがフェードアウトします。</p>
      </header>
      <section>
        <p>スクロールしてみてください。</p>
        <div style={{ height: '1500px' }} />
      </section>
    </div>
  );
}

export default App;