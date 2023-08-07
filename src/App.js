import "./App.css";
import Overview from "./Components/Overview/Overview";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <div className="left">
          <Navbar />
        </div>
        <div>
          <Overview />
        </div>
      </div>
    </div>
  );
}

export default App;
