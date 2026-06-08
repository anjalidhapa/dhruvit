// import Card from "./components/Card";
import { useState } from "react";
// import LoopDisplay from "./components/LoopDisplay";
// import Post from "./components/Post";
import "./App.css";
// import ConditionalRendering from "./components/ConditionalRendering";

// const App = () => {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       task: "Review project proposal",
//       completed: true,
//     },
//     {
//       id: 2,
//       task: "Schedule team sync",
//       completed: false,
//     },
//     {
//       id: 3,
//       task: "Update website landing page",
//       completed: false,
//     },
//     {
//       id: 4,
//       task: "Submit expense report",
//       completed: false,
//     },
//     {
//       id: 5,
//       task: "Plan weekly marketing strategy",
//       completed: true,
//     },
//   ]);

//   return (
//     <div className="todo-wrapper">
//       <h1 className="todo-heading">Todo List</h1>
//       {todos.map((elem) => (
//         <div
//           key={elem.id}
//           className="todo-item"
//           style={
//             elem.completed
//               ? {
//                   textDecoration: "line-through",
//                 }
//               : {
//                   color: "red",
//                 }
//           }
//         >
//           {elem.id}. {elem.task}
//         </div>
//       ))}

//       <hr />

//       <ConditionalRendering />
//     </div>
//   );
// };

//   );
//   return (
//     <div>
//       {/* <Card Heading="Main1" /> */}
//       <Post title={"demo 1"} likes={10} dislikes={5} />
//       <Post title={"demo 2"} likes={30} dislikes={2} />
//       <Post title={"demo 3"} likes={43} dislikes={1} />
//       <Post title={"demo 4"} likes={3} dislikes={0} />
//       <Post title={"demo 5"} likes={0} dislikes={10} />

//       <hr />
//       <hr />
//       <hr />

//       {[
//         { name: "cosmos", age: 31 },
//         { name: "cosmos2", age: 11 },
//         { name: "cosmos3", age: 41 },
//       ].map((elem, index) => {
//         console.log(elem, index);
//         return <LoopDisplay key={index} name={elem.name} age={elem.age} />;
//       })}

//       <hr />
//       <hr />
//       <hr />

//       {[
//         { name: "cosmos", age: 31 },
//         { name: "cosmos2", age: 11 },
//         { name: "cosmos3", age: 41 },
//       ].map((elem, index) => {
//         console.log(elem, index);
//         return (
//           <div key={index}>
//             <h1>{elem.name}</h1>
//             <p>{elem.age}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

import TodoList from "./components/TodoList";
import ConditionalRendering from "./components/ConditionalRendering";

const App = () => {
  const [todos] = useState([
    
    {
      id: 1,
      title: "Review quarterly financial report",
      completed: true,
    },
    {
      id: 2,
      title: "Schedule team sync and prepare agenda",
      completed: false,
    },
    {
      id: 3,
      title: "Complete database backup",
      completed: true,
    },
    {
      id: 4,
      title: "Draft new marketing email campaign",
      completed: false,
    },
    {
      id: 5,
      title: "Renew domain name for company website",
      completed: true,
    },
    {
      id: 6,
      title: "Proofread client project proposal",
      completed: false,
    },
    {
      id: 7,
      title: "Organize digital files and clean up desktop",
      completed: true,
    },
    {
      id: 8,
      title: "Attend afternoon webinar on API security",
      completed: false,
    },
    {
      id: 9,
      title: "Update server dependencies and packages",
      completed: false,
    },
    {
      id: 10,
      title: "Prepare for upcoming client presentation",
      completed: true,
    },
  ]);

  return (
    <div className="todo-wrapper">
      <h1 className="todo-heading">Todo List</h1>

      <TodoList todos={todos} />

      <hr />

      <ConditionalRendering />
    </div>
  );
};

export default App;
      