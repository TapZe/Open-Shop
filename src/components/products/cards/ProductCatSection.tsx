import { useGetProductByCategoryQuery } from "../../../redux/reducers/product/productCatFetchAPI";
import { categorySectionProps } from "../../../types/productTypes";
import ErrorMessage from "../../ErrorMessage";
import ProductCard from "./ProductCard";

const ProductCatSection: React.FC<categorySectionProps> = ({ category }) => {
  const formattedCategory = category
    .toLowerCase()
    .replace(/\b\w/g, (l) => l.toUpperCase());

  const { data, error, isLoading } = useGetProductByCategoryQuery(category);

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <>
      <h2 className="text-xl">{formattedCategory}</h2>
      <div className="grid md:grid-flow-col gap-x-4 md:overflow-x-scroll no-scrollbar p-5 mb-5">
        <ProductCard />
      </div>
    </>
  );
};

export default ProductCatSection;
