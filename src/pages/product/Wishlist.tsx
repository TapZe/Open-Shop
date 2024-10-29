import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../../components/products/cards/ProductCard";
import useAuthData from "../../hooks/useAuthData";
import Fallback from "../../components/Fallback";

const Wishlist = () => {
  const { wishList } = useSelector(
    (state: RootState) => state.persist.wishList
  );
  const { data: userData, isLoading } = useAuthData();
  const wishData = userData ? wishList[userData.id] : [];

  if (isLoading) {
    return <Fallback />;
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-center">
        My <span className="text-cyan-600">Wishlist</span>
      </h1>
      {!(wishData?.length > 0) && (
        <div role="alert" className="alert alert-info mb-5 my-10">
          <FontAwesomeIcon icon={faCircleInfo} />
          <span>No saved product yet!</span>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10">
        {wishData?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Wishlist;
