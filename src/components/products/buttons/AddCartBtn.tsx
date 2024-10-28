import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { ProductProps } from "../../../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import useAuthData from "../../../hooks/useAuthData";
import { useNavigate } from "react-router-dom";
import { addProductToCart } from "../../../redux/reducers/cartSlice";
import CartQuantityBtn from "./CartQuantityBtn";

const AddCartBtn: React.FC<ProductProps> = ({ product }) => {
  const { cart } = useSelector((state: RootState) => state.persist.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: userData, isLoading } = useAuthData();

  const isInCart =
    userData && cart[userData.id]?.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (userData) {
      if (!isInCart) {
        const payload = { product, userId: userData?.id };
        dispatch(addProductToCart(payload));
      }
    } else {
      navigate("/auth/login");
    }
  };

  return (
    <>
      {isInCart ? (
        <CartQuantityBtn product={product} />
      ) : (
        <button
          className="btn btn-primary"
          onClick={handleAddToCart}
          disabled={isLoading}
        >
          <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
        </button>
      )}
    </>
  );
};

export default AddCartBtn;
