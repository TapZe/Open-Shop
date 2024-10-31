import useGetCartTotal from "../../hooks/useGetCartTotal";
import { CartProductsGridProps } from "../../types/types";
import ErrorMessage from "../ErrorMessage";
import Fallback from "../Fallback";
import CheckoutBtn from "./buttons/CheckoutBtn";
import ProductCartCard from "./cards/ProductCartCard";

const ProductCartGrid: React.FC<CartProductsGridProps> = ({
  products,
  isLoading,
  error,
}) => {
  const { totalItems, totalPrice } = useGetCartTotal();

  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (isLoading) {
    return (
      <>
        <Fallback />
      </>
    );
  }

  return (
    <>
      <div className="grid sm:grid-flow-row gap-y-4 m-5">
        {products.map((product) => (
          <ProductCartCard product={product} />
        ))}
        {products.length > 0 && (
          <>
            <div className="summary">
              <h2 className="text-lg font-bold">Cart Summary</h2>
              <p>Total Items: {totalItems}</p>
              <p>Total Price: ${totalPrice}</p>
            </div>{" "}
            <CheckoutBtn products={products} />
          </>
        )}
      </div>
    </>
  );
};

export default ProductCartGrid;
