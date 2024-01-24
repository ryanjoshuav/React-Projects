import { useGlobalContext } from "../context/context.jsx";
import Cocktail from "./Cocktail.jsx";
import Loading from "./Loading.jsx";

const CocktailList = () => {
  const { cocktails, isLoading } = useGlobalContext();

  return isLoading ? (
    <Loading />
  ) : cocktails.length < 1 ? (
    <h2 className="section-title">no cocktails matched your search criteria</h2>
  ) : (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {/* Cocktail List */}
        {cocktails.map((cocktail) => (
          <Cocktail key={cocktail.id} {...cocktail} />
        ))}
      </div>
    </section>
  );
};
export default CocktailList;
