import { useGetAllCategoryQuery } from "../../redux/reducers/product/productCatFetchAPI";
import ErrorMessage from "../ErrorMessage";
import Fallback from "../Fallback";
import ProductCatSection from "./cards/ProductCatSection";

const ProductHomeGrid: React.FC = () => {
  const { data, error, isLoading } = useGetAllCategoryQuery();

  if (isLoading) {
    return <Fallback />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <>
      <div className="grid grid-flow-row py-10 gap-5">
        {data?.map((category, index) => (
          <ProductCatSection key={index} category={category} />
        ))}
      </div>
    </>
  );
};

export default ProductHomeGrid;
