import "./App.css";

function App(prop) {
  return (
    <div className="App">
      <div className="flex">
        <p>BACK TO ALL PLANTS</p>
        <p>X</p>
      </div>
      <div className="flex">
        <div>
          <img
            src={
             prop.image
            }
            alt="image"
          ></img>
        </div>
        <div>
          <h1>{prop.type}</h1>
          <h4>{prop.title}</h4>
          <h1>{prop.price}</h1>
          <p>
            A plant is a living thing that grows in the earth and has a stem,
            leaves, and roots
          </p>
          <button className="btn1">Buy Now</button>
          <button className="btn2">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default App;
