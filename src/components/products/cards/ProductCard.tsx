import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProductCardProps } from "../../../types/productTypes";
import { Link } from "react-router-dom";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import AddWishlistBtn from "../buttons/AddWishlistBtn";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { productQuantity } = useSelector(
    (state: RootState) => state.persist.productQuantity
  );
  const { id, title, price, rating, image, description } = product;

  // Find the current product quantity
  const productInCart = productQuantity.find((product) => product.id === id);
  const quantity = productInCart ? productInCart.quantity : 0;

  return (
    <>
      <div className="card bg-base-100 w-72 shadow-xl transition-transform duration-300 transform hover:scale-105">
        <AddWishlistBtn product={product} />
        <figure className="px-10 pt-10 h-72">
          <div className="rounded-xl h-full overflow-hidden">
            <img
              src={image}
              alt="Product Image"
              className="rounded-xl object-scale-down"
            />
          </div>
        </figure>
        <div className="card-body">
          <div className="badge badge-secondary badge-outline">
            <FontAwesomeIcon icon={faStar} />
            &nbsp;{rating.rate}/5
          </div>
          <div className="text-2xl font-bold">${price}</div>
          <Link
            to={`product/detail/${id}`}
            className="card-title text-justify hover:underline"
          >
            {title}
          </Link>
          <p className="truncate">{description}</p>
          <div className="badge badge-primary badge-outline badge-lg">
            Quantity: {quantity}
          </div>
          <div className="card-actions justify-end mt-5">
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
