import Home from "./Home.jsx";
import Modal from "./Modal.jsx";
import Sidebar from "./Sidebar.jsx";
import { AppProvider } from "./context/context.jsx";

const App = () => {
  return (
    <>
      <AppProvider>
        <Home />
        <Modal />
        <Sidebar />
      </AppProvider>
    </>
  );
};
export default App;
