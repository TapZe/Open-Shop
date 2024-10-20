import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductCard = () => {
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
        <figure className="px-10 pt-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl aspect-video object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
