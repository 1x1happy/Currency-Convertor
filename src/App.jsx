import "./App.scss";
import Convertor from "./components/Convertor/Convertor";

function App() {
  return (
    <div className="App">
      <div className="currencyHeading">
        <h2>Currency Converter</h2>
        <p>
          Check live rates, set rate alerts, receive notifications and more.
        </p>
      </div>
      <div className="convertorContainer">
        <Convertor />
      </div>
      <div className="exchangeRate">
        <p>Indicative Exchange Rate</p>
        <span>1 SGD = 0.7367 USD</span>
      </div>
    </div>
  );
}

export default App;
