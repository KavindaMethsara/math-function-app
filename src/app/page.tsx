'use client';
import Image from 'next/image'
import { useState } from 'react';

/*We can change the values dynamically*/
export default function Home() {
  const [X, setX] = useState(0); // Initial value of X
  const [a, setA] = useState(2); // Initial value of a
  const [b, setB] = useState(3); // Initial value of b
  const [c, setC] = useState(10); // Initial value of c

  const calculateY = () => {
    // Solve for Y
    const Y = (c - a * X) / b;
    return Y;
  };

  return (
    <div className='flex flex-col space-y-4 '>
      <h1>Math Function</h1>
      <div>
        <p>Equation: {a}X + {b}Y = {c}</p>
        <label htmlFor="XInput">X:</label>
        <input className='text-black rounded-md'
          id="XInput"
          type="number"
          value={X}
          onChange={(e) => setX(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="aInput">a:</label>
        <input className='text-black rounded-md'
          id="aInput"
          type="number"
          value={a}
          onChange={(e) => setA(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="bInput">b:</label>
        <input className='text-black border rounded-md'
          id="bInput"
          type="number"
          value={b}
          onChange={(e) => setB(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="cInput">c:</label>
        <input className='text-black rounded-md'
          id="cInput"
          type="number"
          value={c}
          onChange={(e) => setC(parseInt(e.target.value))}
        />
      </div>
      <div>
        <p>Y: {calculateY()}</p>
      </div>
    </div>
  );
}

