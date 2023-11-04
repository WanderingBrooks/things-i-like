import React from 'react';
import classes from './dvdBouncer.module.css';


interface DvdBouncerProps {
  children: React.ReactNode;
  selector: string;
}

// function that randomly returns 1 or negative 1
const getRandomDirection=() => Math.random() < 0.5 ? -1 : 1;

const DvdBouncer: React.FC<DvdBouncerProps> = ({ children, selector }) => {
  const [pos, setPos] = React.useState({ x: 0, y: 0 });
  const [vector, setVector] = React.useState({ x: getRandomDirection() * 2, y: getRandomDirection() * 2 });

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      const boundingRectClient = document.querySelector(selector)?.getBoundingClientRect() 


      if (boundingRectClient) {        
        if (boundingRectClient.x + vector.x >= window.innerWidth - boundingRectClient.width || boundingRectClient.x + vector.x <= 0) {
          setVector({ ...vector, x: vector.x * -1 });
        }
        
        if (boundingRectClient.y + vector.y >= window.innerHeight - boundingRectClient.height || boundingRectClient.y + vector.y <= 0) {
          setVector({ ...vector, y: vector.y * -1 });
        }
        
        setPos({ x: pos.x + vector.x, y: pos.y + vector.y  }); 
      }
    }, 10);

    return () => clearTimeout(timeoutId);
  }, [pos, vector]);

  return (
    <div className={classes.toBounce} style={{ left: pos.x, top: pos.y }}>
      {children}
    </div>
  );
};


export default DvdBouncer;
