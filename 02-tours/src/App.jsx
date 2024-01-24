import { useEffect } from "react";
import { useState } from "react";
import Tours from "./Tours.jsx";

const URL = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  const refreshList = () => {
    setRefresh(true);
  };

  useEffect(() => {
    const fetchTours = async () => {
      try {
        setIsLoading(true);
        const resp = await fetch(URL);
        if (!resp.ok) throw new Error("Error while fetching tours list");

        const data = await resp.json();
        setTours(data);
        setIsLoading(false);
        setRefresh(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTours();
  }, [refresh]);

  const content = isLoading ? (
    <div className="loading">
      <h1>loading...</h1>
    </div>
  ) : tours.length < 1 ? (
    <main>
      <div className="title">
        <h2>no tours to display</h2>
        <button onClick={refreshList} className="btn">
          refresh
        </button>
      </div>
    </main>
  ) : (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );

  return content;
};
export default App;
