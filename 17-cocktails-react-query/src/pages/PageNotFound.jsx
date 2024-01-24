import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage.js";
import img from "../assets/not-found.svg";

const PageNotFound = () => {
  return (
    <Wrapper>
      <div>
        <img src={img} alt="not found" />
        <h3>Error!</h3>
        <p>Page not found</p>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  );
};
export default PageNotFound;
