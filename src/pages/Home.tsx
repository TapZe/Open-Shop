import ProductHomeGrid from "../components/products/ProductHomeGrid";
import { useGetAllProductQuery } from "../redux/reducers/product/productFetchAPI";

const Home: React.FC = () => {
  useGetAllProductQuery();

  return (
    <>
      <ProductHomeGrid />
    </>
  );
};

export default Home;
