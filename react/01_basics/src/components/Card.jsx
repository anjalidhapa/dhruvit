const Card = ({ title, price }) => {
  // console.log(props);
  const num1 = 10;
  return (
    <div>
      {/* <h1>{props.title}</h1>
      <h3>{props.price}</h3> */}
      <h1>{title}</h1>
      <h3>{price}</h3>
      <p>
        Card content Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Eaque, reprehenderit.
      </p>
      <button>Click Me {num1}</button>

      <hr />
    </div>
  );
};

export default Card;