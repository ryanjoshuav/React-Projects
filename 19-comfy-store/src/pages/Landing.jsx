import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils/index.jsx";

const productsUrl = "/products?featured=true";

const featuredProductsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => customFetch(productsUrl),
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery);
  const products = response.data.data;
  return { products };
};

// *Before react-query
// export const loader = async () => {
//   try {
//     const resp = await customFetch(productsUrl);
//     const products = resp.data.data;
//     return { products };
//   } catch (error) {
//     console.log(error);
//   }
// };

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};
export default Landing;
