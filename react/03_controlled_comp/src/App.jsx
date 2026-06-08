import { useEffect, useState } from "react";

const App = () => {
  const [userName, setUserName] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    console.log("User name updated:", userName);
  }, [userName]);

  useEffect(() => {
    console.log("All users updated:", allUsers);
  }, [allUsers]);

  
  return (
    <div>
      name:
      <input
        type="text"
        name="name"
        id="name"
        onChange={(e) => {
          console.log(e.target.value);
          setUserName(e.target.value);
          console.log(userName);
        }}
      />
      <button
        onClick={() => {
          setAllUsers((prevUsers) => [...prevUsers, userName]);
          console.log(allUsers);
        }}
      >
        submit
      </button>
      <hr />
      {allUsers.map((elem, index) => {
        return <div key={index}>{elem}</div>;
      })}
      <hr />
      {/* <UseEffectHook /> */}
    </div>
  );
};

export default App;
