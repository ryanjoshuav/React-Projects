import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Submenu from "./components/Submenu.jsx";
import { AppProvider } from "./context/context.jsx";

const App = () => {
  return (
    <main>
      <AppProvider>
        <Navbar />
        <Sidebar />
        <Hero />
        <Submenu />
      </AppProvider>
    </main>
  );
};
export default App;
