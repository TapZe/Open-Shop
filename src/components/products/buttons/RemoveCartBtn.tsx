import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { ProductProps } from "../../../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import useAuthData from "../../../hooks/useAuthData";
import { useNavigate } from "react-router-dom";
import { removeProductFromCart } from "../../../redux/reducers/cartSlice";

const RemoverCartBtn: React.FC<ProductProps> = ({ product }) => {
  const { cart } = useSelector((state: RootState) => state.persist.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: userData, isLoading } = useAuthData();

  const isInCart =
    userData && cart[userData.id]?.some((item) => item.id === product.id);

  const handleRemoveToCart = () => {
    if (userData) {
      if (isInCart) {
        const payload = { userId: userData?.id, productId: product?.id };
        dispatch(removeProductFromCart(payload));
      }
    } else {
      navigate("/auth/login");
    }
  };

  return (
    <>
      {isInCart && (
        <button
          className="btn btn-outline btn-error"
          onClick={handleRemoveToCart}
          disabled={isLoading}
        >
          <FontAwesomeIcon icon={faTrash} /> Remove from Cart
        </button>
      )}
    </>
  );
};

export default RemoverCartBtn;
