import CartContainer from "./components/CartContainer.jsx";
import Navbar from "./components/Navbar.jsx";
import { useGlobalContext } from "./utils/context.jsx";

const App = () => {
  const { loading } = useGlobalContext();

  return loading ? (
    <main>
      <div className="loading"></div>;
    </main>
  ) : (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
};
export default App;
