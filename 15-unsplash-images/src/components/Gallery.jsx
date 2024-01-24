import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "../context/context.jsx";
import axios from "axios";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const { searchTerm } = useGlobalContext();

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const resp = await axios.get(`${url}&query=${searchTerm}`);
      console.log(resp);
      return resp.data;
    },
  });
  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="image-container">
        <h4>Error:{error}</h4>
      </section>
    );
  }
  const results = data.results;
  console.log(results);
  return results.length < 1 ? (
    <section className="image-container">
      <h4>No results found</h4>
    </section>
  ) : (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            alt={item.alt_description}
            className="img"
            key={item.id}
          />
        );
      })}
    </section>
  );
};
export default Gallery;
