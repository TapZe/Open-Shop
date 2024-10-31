import { useSelector } from "react-redux";
import ProductCartGrid from "../../components/products/ProductCartGrid";
import { RootState } from "../../redux/store";
import useAuthData from "../../hooks/useAuthData";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductCart = () => {
  const { cart } = useSelector((state: RootState) => state.persist.cart);
  const { data: userData, error, isLoading } = useAuthData();

  const products = userData ? cart[userData.id] : [];

  return (
    <>
      <h1 className="text-3xl font-bold text-center">
        My <span className="text-cyan-600">Shopping Cart</span>
      </h1>
      {!(products?.length > 0) && (
        <div role="alert" className="alert alert-info mb-5 my-10">
          <FontAwesomeIcon icon={faCircleInfo} />
          <span>No saved product yet!</span>
        </div>
      )}
      <ProductCartGrid
        products={products}
        error={error}
        isLoading={isLoading}
      />
    </>
  );
};

export default ProductCart;
