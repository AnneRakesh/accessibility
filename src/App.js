import "./App.css";
import Overview from "./Components/Overview/Overview";
import Navbar from "./Components/Navbar/Navbar";
import BalanceCard from "./Components/Balance/Balance";
function App() {
  
  return (
    <div className="App">
      <div className="mainContainer">
        <div className="left">
          <Navbar />
        </div>
        <div className="Middle">
          <Overview />
        </div>
        <div className="right">
          <BalanceCard />
        </div>
      </div>
    </div>
  );
}

export default App;
