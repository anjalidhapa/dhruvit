import { useState } from "react";

const Qunatity = () => {
  // let counter = 1;
  const [num, setNum] = useState(1);
  return (
    <div>
      <h1>Quantity: {num}</h1>
      <button
        onClick={() => {
          console.log(num);
          if (num - 1 < 0) {
            setNum(0);
          } else {
            setNum(num - 1);
          }
        }}
      >
        Like
      </button>
{/* 
      <button
        onClick={() => {
          console.log(num);
          setNum(num + 1);
        }}
      >
        +
      </button> */}
    </div>
  );
};

export default Qunatity;
// heading , para, likes


