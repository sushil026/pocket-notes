import React, { useEffect, useState } from 'react';
import WebView from './views/WebView';
import MobileView from './views/MobileView';

const App = () => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {
        (screenWidth < 800 || (screenHeight > screenWidth)) ? <MobileView /> : <WebView />
      }
    </>
  );
}

export default App;
