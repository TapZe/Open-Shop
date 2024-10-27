import { useGetProductByCategoryQuery } from "../../../redux/reducers/product/productCatFetchAPI";
import { CategorySectionProps } from "../../../types/productTypes";
import ErrorMessage from "../../ErrorMessage";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductCatSection: React.FC<CategorySectionProps> = ({ category }) => {
  const formattedCategory = category
    .toLowerCase()
    .replace(/\b\w/g, (l) => l.toUpperCase());

  const { data, error, isLoading } = useGetProductByCategoryQuery(category);

  if (error) {
    return <ErrorMessage error={error} />;
  }

  // Define how many skeleton to render
  const skeletonCount = 5;
  if (isLoading) {
    return (
      <>
        <h2 className="text-xl">{formattedCategory}</h2>
        <div className="grid md:grid-flow-col gap-x-4 md:overflow-x-scroll no-scrollbar p-5 mb-5">
          {Array.from({ length: skeletonCount }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <h2 className="text-xl">{formattedCategory}</h2>
      <div className="grid md:grid-flow-col gap-x-4 md:overflow-x-scroll no-scrollbar p-5 mb-5">
        {data?.map((product) => {
          const { id } = product;
          return <ProductCard key={id} product={product} />;
        })}
      </div>
    </>
  );
};

export default ProductCatSection;
