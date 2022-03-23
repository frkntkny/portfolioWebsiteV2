import Header from "./Header";
import Portfolio from "./Portfolio";

function App() {
  return (
    <div>
      <Header />
      <hr
        style={{
          backgroundColor: "#bbed2f",
          height: 1,
          marginTop: 0,
          marginBottom: 0,
        }}
      />
      <Portfolio />
    </div>
  );
}

export default App;
