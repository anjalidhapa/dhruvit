const Student = (props) => {
  console.log("student comp called ");
  return (
    <div>
      <h2>Student Component</h2>
      <p>Text: {props.text}</p>
      <p>Number: {props.number}</p>
    </div>
  );
};
export default Student;
