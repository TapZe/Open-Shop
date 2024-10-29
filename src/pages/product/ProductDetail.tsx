import { useParams } from "react-router-dom";
import ProductDetailCard from "../../components/products/cards/ProductDetailCard";
import { useGetProductByIdQuery } from "../../redux/reducers/product/productFetchAPI";
import Fallback from "../../components/Fallback";
import ErrorMessage from "../../components/ErrorMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";

const ProductDetail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProductByIdQuery(Number(id));

  return (
    <>
      {isLoading && <Fallback />}
      {error && <ErrorMessage error={error} />}
      {data && <ProductDetailCard product={data} />}
      {!data && !isLoading && (
        <div role="alert" className="alert alert-warning mb-5 my-10">
          <FontAwesomeIcon icon={faWarning} />
          <span>The product you are looking for doesn't exist!</span>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
