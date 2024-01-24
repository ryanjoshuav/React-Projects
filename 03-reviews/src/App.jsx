import Review from "./Review.jsx";

const App = () => {
  const content = (
    <main>
      <section className="container">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
  return content;
};
export default App;
