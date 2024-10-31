import { useNavigate } from "react-router-dom";
import { ManyCartProduct } from "../../../types/cartTypes";
import { useDispatch } from "react-redux";
import useAuthData from "../../../hooks/useAuthData";
import { removeProductFromCart } from "../../../redux/reducers/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const CheckoutBtn: React.FC<ManyCartProduct> = ({ products }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: userData, isLoading } = useAuthData();

  const handleOnClick = () => {
    if (userData) {
      // Filter products to only include those that have product.checkout as true
      const productsToRemove = products.filter((product) => product.checkout);

      // Remove products that are marked for checkout
      productsToRemove.forEach((product) => {
        const payload = { userId: userData.id, productId: product.id };
        dispatch(removeProductFromCart(payload));
      });
    } else {
      navigate("/auth/login");
    }
  };

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={handleOnClick}
        disabled={isLoading}
      >
        <FontAwesomeIcon icon={faCartArrowDown} />{" "}
        {isLoading ? "Loading..." : "Checkout"}
      </button>
    </>
  );
};

export default CheckoutBtn;
