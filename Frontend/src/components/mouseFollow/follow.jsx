import React, { useState, useEffect } from "react";
import "./follow.css";

const Follow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [squares, setSquares] = useState([]);

  const calculateSquares = () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const columns = Math.ceil(vw / 200); // 200px square width
    const rows = Math.ceil(vh / 200); // 200px square height

    const totalSquares = columns * rows;
    setSquares(Array(totalSquares).fill(null)); // Create an array of squares
  };

  useEffect(() => {
    calculateSquares();
    window.addEventListener("resize", calculateSquares);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", calculateSquares);
    };
  }, []);

  // Function to handle mouse movement
  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  // Add the event listener for mouse movement when the component mounts
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="follow">
          <div className="background"></div>
      {/* Circle that follows the mouse */}
            <div className='squares'>
        {squares.map((_, index) => (
          <div key={index} className="square"></div>
        ))}
      </div>
      <div
        className="circle"
        style={{
          transform: `translate(${position.x - 25}px, ${position.y - 25}px)`,
        }}
      ></div>
    </div>
  );
};

export default Follow;
