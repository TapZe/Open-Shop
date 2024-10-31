import { useDispatch } from "react-redux";
import { CartProductProps } from "../../../types/types";
import { changeCheckoutCheck } from "../../../redux/reducers/cartSlice";
import { useNavigate } from "react-router-dom";
import useAuthData from "../../../hooks/useAuthData";

const CheckoutChecklist: React.FC<CartProductProps> = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: userData, isLoading } = useAuthData();

  const handleOnChange = () => {
    if (userData) {
      dispatch(
        changeCheckoutCheck({
          productId: product?.id,
          userId: userData?.id,
        })
      );
    } else {
      navigate("/auth/login");
    }
  };

  return (
    <>
      <input
        type="checkbox"
        checked={product.checkout}
        onChange={handleOnChange}
        disabled={isLoading}
        className="checkbox"
      />
    </>
  );
};

export default CheckoutChecklist;
