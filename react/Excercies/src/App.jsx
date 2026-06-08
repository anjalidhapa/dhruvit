import Student from "./student";
import "./App.css";
import { useState } from "react";

const App = () => {
  const message = "Hello User..!";
  const [name, setName] = useState("demo");

  const Click = () => {
    alert(message);
  };

  const nameMessage = "Enter your name:";

  const Prompt = () => {
    setName(prompt(nameMessage));
  };

  const confirmMessage = "Are you sure want to leave the page.?";
  const Confirm = () => {
    confirm(confirmMessage);
  };

  return (
    <div>
      <h1>App Component</h1>

      <Student text={message} number={42} />

      <button
        onClick={Click}
        style={{
          color: "white",
          backgroundColor: "red",
          border: "none",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>

      <hr />

      <h1>App Component</h1>

      <Student text={name} number={42} />

      <button
        onClick={Prompt}
        style={{
          color: "white",
          backgroundColor: "blue",
          border: "none",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Prompt
      </button>

      <hr />

      <h1>App Component</h1>

      <Student text={message} number={42} />

      <button
        onClick={Confirm}
        style={{
          color: "white",
          backgroundColor: "green",
          border: "none",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Confirm
      </button>
    </div>
  );
};

export default App;
