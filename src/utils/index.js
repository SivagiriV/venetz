import { useState, useEffect } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateDeviceType = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setIsMobile(true);
      } else if (width >= 768 && width < 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    updateDeviceType();
    window.addEventListener('resize', updateDeviceType);
    return () => {
      window.removeEventListener('resize', updateDeviceType);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;

