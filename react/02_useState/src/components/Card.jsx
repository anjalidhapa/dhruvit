import Qunatity from "./Qunatity.jsx";

const Card = ({ Heading }) => {
  return (
    <div>
      <h1>{Heading}</h1>

      <p>
        Card content Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Eaque, reprehenderit.
      </p>

      <img
        src="https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk="
        alt="card image"
      />
      <Qunatity />
      <hr />
    </div>
  );
};

export default Card;
