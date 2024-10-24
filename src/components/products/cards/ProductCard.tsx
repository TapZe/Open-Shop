import { faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { productCardProps } from "../../../types/productTypes";
import { Link } from "react-router-dom";

const ProductCard: React.FC<productCardProps> = (props) => {
  const { id, title, price, rating, image, description } = props.product;
  return (
    <>
      <div className="card bg-base-100 w-72 shadow-xl">
        <div
          className="tooltip absolute top-2 right-2"
          data-tip="Add to wishlist"
        >
          <button className="btn btn-sm btn-primary btn-outline">
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
        <Link
          to={`/detail/${id}/product`}
          className="px-10 pt-10 h-72 transition duration-300 ease-in-out hover:scale-110"
        >
          <div className="rounded-xl h-full overflow-hidden">
            <img
              src={image}
              alt="Product Image"
              className="rounded-xl object-scale-down"
            />
          </div>
        </Link>
        <div className="card-body">
          <div className="badge badge-secondary badge-outline">
            <FontAwesomeIcon icon={faStar} />
            &nbsp;{rating.rate}/5
          </div>
          <div className="text-2xl font-bold">${price}</div>
          <Link
            to={`/detail/${id}/product`}
            className="card-title text-justify hover:underline"
          >
            {title}
          </Link>
          <p className="truncate">{description}</p>
          <div className="card-actions justify-end mt-5">
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
