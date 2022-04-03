import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import BrandsList from "./components/Details/BrandsList";
function App(props) {

  return (
    <div className="App">
      <Routes>
        <Route path="/brands" element={<BrandsList />} />
        <Route path="/" element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
