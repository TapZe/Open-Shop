import { useSelector } from "react-redux";
import { ProductProps } from "../../../types/types";
import { RootState } from "../../../redux/store";
import AddCartBtn from "../buttons/AddCartBtn";
import AddWishlistBtn from "../buttons/AddWishlistBtn";

const ProductDetailCard: React.FC<ProductProps> = ({ product }) => {
  const { productQuantity } = useSelector(
    (state: RootState) => state.persist.productQuantity
  );
  const { id, title, price, rating, image, description } = product;

  // Find the current product quantity
  const currentProduct = productQuantity.find((product) => product.id === id);
  const quantity = currentProduct ? currentProduct.quantity : 0;

  return (
    <>
      <div className="hero bg-base-200 rounded-xl">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} alt={title} className="w-80 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6">{description}</p>
            <p className="text-xl font-semibold">Price: ${price.toFixed(2)}</p>
            <div className="mt-4 flex flex-col">
              <div className="badge badge-secondary badge-outline mb-2">
                Rating: {rating.rate} / 5 from {rating.count} satisfied
                customers!
              </div>
              <div className="badge badge-primary badge-outline badge-lg">
                Available Quantity: {quantity}{" "}
                {quantity > 0 ? "in stock!" : "out of stock"}
              </div>
            </div>
            <div className="mt-4 w-40">
              <AddCartBtn product={product} />
            </div>
            <div className="mt-2">
              <AddWishlistBtn product={product} toolPlace="right" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailCard;
