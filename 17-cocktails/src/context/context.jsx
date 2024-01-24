import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import useDebounce from "./useDebounce.jsx";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktails, setCocktails] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const fetchDrinks = useCallback(async () => {
    setIsLoading(true);
    try {
      const resp = await fetch(`${url}${debouncedSearchTerm}`);
      const data = await resp.json();
      const { drinks } = data;
      console.log(drinks);
      if (drinks) {
        const newCocktails = drinks.map((drink) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            drink;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    fetchDrinks();
  }, [debouncedSearchTerm]);

  return (
    <AppContext.Provider value={{ isLoading, cocktails, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
