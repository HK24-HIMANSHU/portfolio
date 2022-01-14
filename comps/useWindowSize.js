import { useEffect, useState } from 'react';

/**
 * @returns {Size} [height, width]
 */
const useWindowSize = () => {
  const [size, setSize] = useState([1200, 800]);

  const handleResize = () => setSize([window.innerHeight, window.innerWidth]);

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener('resize', handleResize);

      handleResize();

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return size;
};

export default useWindowSize;
