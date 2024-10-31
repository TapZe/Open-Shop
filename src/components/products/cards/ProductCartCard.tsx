import { useSelector } from "react-redux";
import { CartProductProps } from "../../../types/types";
import { RootState } from "../../../redux/store";
import { Link } from "react-router-dom";
import AddCartBtn from "../buttons/AddCartBtn";
import RemoverCartBtn from "../buttons/RemoveCartBtn";
import CheckoutChecklist from "../buttons/CheckoutChecklist";

const ProductCartCard: React.FC<CartProductProps> = ({ product }) => {
  const { productQuantity } = useSelector(
    (state: RootState) => state.persist.productQuantity
  );
  const { id, title, price, image } = product;

  // Find the current product quantity
  const currentProduct = productQuantity.find((product) => product.id === id);
  const quantity = currentProduct ? currentProduct.quantity : 0;

  return (
    <>
      <div className="card sm:card-side bg-base-100 shadow-xl">
        <figure className="p-5 max-h-72 sm:h-auto sm:max-w-56 block">
          <div className="rounded-xl h-full overflow-hidden">
            <img
              src={image}
              alt="Product Image"
              className="rounded-xl object-contain h-full w-full"
            />
          </div>
        </figure>
        <div className="card-body">
          <Link
            to={`/product/detail/${id}`}
            className="card-title text-justify hover:underline"
          >
            {title}
          </Link>
          <div className="badge badge-primary badge-outline badge-lg">
            Quantity: {quantity}
          </div>
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">${price}</div>
            <CheckoutChecklist product={product} />
          </div>
          <div className="card-actions justify-end mt-4">
            <AddCartBtn product={product} />
            <RemoverCartBtn product={product} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCartCard;
