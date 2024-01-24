import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

const HomeLayout = () => {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";
  const value = "some value"; // if we want to use outlet as a context provider
  return (
    <div>
      <Navbar />
      <section className="page">
        {isLoading ? (
          <div className="loading" />
        ) : (
          <Outlet context={{ value }} />
        )}
      </section>
    </div>
  );
};
export default HomeLayout;
