import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <Card title="Cars" price={50000} />
      <Card title="Bikes" price={5000} />
      <Card title="Trucks" price={25000} />
      <Card title="Motorcycles" price={10000} />
    </div>
  );
};

export default App;
