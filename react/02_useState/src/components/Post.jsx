import { useState } from "react";

const Post = ({ title, likes }) => {
  const [counterLike, setCounterLike] = useState(likes);
  // const [counterDislikes, setCounterDislikes] = useState(dislikes);
  return (
    <div>
      <h1>{title}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, aut.
      </p>
      <p>
        {counterLike}

        <button
          onClick={() => {
            setCounterLike(likes + 1);
          }}
          style={{ marginLeft: "1rem", textTransform: "capitalize" }}
        >
          like
        </button>

        {/* <span style={{ marginLeft: "1rem" }}>{counterDislikes}</span> */}
        <button
          onClick={() => {
            setCounterLike(likes - 1);
            // setCounterDislikes(dislikes + 1);
          }}
          style={{ marginLeft: "1rem", textTransform: "capitalize" }}
        >
          dislike
        </button>
      </p>

      <hr />
    </div>
  );
};

export default Post;
