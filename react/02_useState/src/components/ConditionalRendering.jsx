const ConditionalRendering = () => {
  let num1 = 1;
  const data = {
    name: "cosmos",
    age: 101,
  };
  //   const data = {};
  return (
    <div style={num1 == 43 ? { color: "red" } : { color: "blue" }}>
      {
        //   condition (true, false) ? true code : false code
        num1 == 1 ? <h1>true</h1> : <u>False</u>
      }
      {data ? (
        <div>
          <h1>Name: {data.name ? data.name : "asdf"}</h1>
          <p>Age: {data.age}</p>
        </div>
      ) : (
        <div>Loading ... </div>
      )}

      <hr />

      {/* {true && <h1> asdf </h1>} */}
    </div>
  );
};


export default ConditionalRendering;
