import { useState } from "react";
import styles from "./Form.module.css";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    console.log("name = ", name);
    console.log("email = ", email);
    console.log("password = ", password);

    // console.log(import.meta.env.VITE_BACKEND_URL);

    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}api/user`,
      {
        name,
        email,
        password,
      },
    );

    console.log("res = ", res.data);
  };

  return (
    <div className={styles.formStyle} style={{ padding: "1rem" }}>
      <div className={styles.PasswordWrapper}>
        <div className={styles.Email}>
          <label className={styles.EmailTitle}>Enter Name:</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Enter your name"
            value={name}
          />
        </div>

        <div className={styles.Email}>
          <label className={styles.EmailTitle}>Enter Email:</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Enter your email"
            value={email}
          />
        </div>

        <div className={styles.Password}>
          <label className={styles.PasswordTitle}>Enter Password:</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Enter your password"
            value={password}
          />
        </div>
      </div>
      <div className={styles.ButtonWrapper}>
        <button onClick={handleSubmit} className={styles.Button}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Form;
