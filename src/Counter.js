import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Counter.css';
function Counter() {
   const [counter, setCounter] = useState(0);
   const [initialCount, setInitialCount] = useState(0);
   const handleInitialCountChange = (event) => {
      setInitialCount(event.target.value);
   };
   const handleReset = () => {
      setCounter(initialCount);
   };
   return (
      <div className='counter-container '>
         <div class="counter-nmuber" >{counter}</div>
         <div class="counter-btn">
            <button onClick={() => setCounter(counter + 1)} class="inc-btn">Increment</button>
            <button onClick={() => setCounter(counter - 1)} class="dec-btn">Decrement</button>
            <button onClick={handleReset} class="reset-btn">Reset</button>
         </div>      
      </div>
   );
}
export default Counter; 