import { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(101);

  useEffect(() => {
    console.log(num1);
  }, [num2]);

  useEffect(() => {
    console.log("use effect with []");
  }, []);

  useEffect(() => {
    console.log("use effect without any []");
  });
  return (
    <div>
      <div onClick={() => setNum1(num1 + 1)}>click 1</div>
      <div onClick={() => setNum2(num2 + 1)}>click 2</div>
    </div>
  );
};

export default UseEffectHook;
