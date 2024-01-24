import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Components
import Navbar from "./components/Navbar.jsx";

// Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Error from "./pages/Error.jsx";
import SingleCocktail from "./pages/SingleCocktail.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cocktail/:id" element={<SingleCocktail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};
export default App;
