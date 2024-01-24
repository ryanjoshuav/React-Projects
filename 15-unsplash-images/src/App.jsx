import Gallery from "./components/Gallery.jsx";
import SearchForm from "./components/SearchForm.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";

const App = () => {
  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  );
};
export default App;
