import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeaderInfo } from "./components/layout";
import { HomePage, CategoryPage } from "./pages";

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderInfo />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
