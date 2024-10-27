import { ProductsGridProps } from "../../types/productTypes";
import ErrorMessage from "../ErrorMessage";
import ProductCardSkeleton from "./cards/ProductCardSkeleton";

const ProductGrid: React.FC<ProductsGridProps> = ({
  product,
  isLoading,
  error,
}) => {
  if (error) {
    return <ErrorMessage error={error} />;
  }

  // Define how many skeleton to render
  const skeletonCount = 8;
  if (isLoading) {
    return (
      <>
        <div className="grid md:grid-flow-col gap-x-4 md:overflow-x-scroll no-scrollbar p-5 mb-5">
          {Array.from({ length: skeletonCount }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      </>
    );
  }

  return <div>ProductGrid</div>;
};

export default ProductGrid;
