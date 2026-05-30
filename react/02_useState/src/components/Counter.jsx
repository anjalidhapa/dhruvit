import { useState } from "react";


const Counter = () => {
  let counter = 0;
  const [num, setNum] = useState(0);
        
  return (
    <div>
      <h1>Counter: {num}</h1>
      <button
        onClick={() => {
          console.log(num);
          //   setNum(num + 10)
          setNum(num + 1);
        }}
          >
        click
      </button>
    </div>
  );
};

export default Counter;

// components + props | usestate hook