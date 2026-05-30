// import Card from "./components/Card";
import LoopDisplay from "./components/LoopDisplay";
import Post from "./components/Post";

const App = () => {
  return (
    <div>
      {/* <Card Heading="Main1" /> */}
      <Post title={"demo 1"} likes={10} dislikes={5} />
      <Post title={"demo 2"} likes={30} dislikes={2} />
      <Post title={"demo 3"} likes={43} dislikes={1} />
      <Post title={"demo 4"} likes={3} dislikes={0} />
      <Post title={"demo 5"} likes={0} dislikes={10} />

      <hr />
      <hr />
      <hr />

      {[
        { name: "cosmos", age: 31 },
        { name: "cosmos2", age: 11 },
        { name: "cosmos3", age: 41 },
      ].map((elem, index) => {
        console.log(elem, index);
        return <LoopDisplay key={index} name={elem.name} age={elem.age} />;
      })}

      <hr />
      <hr />
      <hr />

      {[
        { name: "cosmos", age: 31 },
        { name: "cosmos2", age: 11 },
        { name: "cosmos3", age: 41 },
      ].map((elem, index) => {
        console.log(elem, index);
        return (
          <div key={index}>
            <h1>{elem.name}</h1>
            <p>{elem.age}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
