import { useDispatch, useSelector } from "react-redux";
import { ProductProps } from "../../../types/types";
import useAuthData from "../../../hooks/useAuthData";
import { RootState } from "../../../redux/store";
import { useEffect, useState } from "react";
import {
  addProductToCart,
  changeProductQuantityInCart,
  decreaseProductFromCart,
} from "../../../redux/reducers/cartSlice";

const CartQuantityBtn: React.FC<ProductProps> = ({ product }) => {
  const { cart } = useSelector((state: RootState) => state.persist.cart);
  const dispatch = useDispatch();
  const { data: userData, isLoading } = useAuthData();
  const [quantity, setQuantity] = useState(0);

  // Check if the product is in the cart and get its quantity
  const productInCart =
    userData && cart[userData.id]?.find((item) => item.id === product.id);
  const cartQuantity = productInCart ? productInCart.quantity : 0;

  useEffect(() => {
    setQuantity(cartQuantity);
  }, [cartQuantity]);

  const handleIncrement = () => {
    if (userData) {
      dispatch(addProductToCart({ userId: userData.id, product }));
    }
  };

  const handleDecrement = () => {
    if (userData && quantity > 0) {
      dispatch(
        decreaseProductFromCart({ userId: userData.id, productId: product.id })
      );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (userData) {
      const value = Math.max(0, Number(e.target.value)); // Ensure quantity doesn't go below 0
      dispatch(
        changeProductQuantityInCart({
          userId: userData.id,
          productId: product.id,
          quantity: value,
        })
      );
    }
  };

  return (
    <>
      <button onClick={handleDecrement} disabled={isLoading || quantity === 0}>
        -
      </button>
      <input
        type="number"
        value={quantity}
        min={0}
        onChange={handleChange}
        disabled={isLoading}
      />
      <button onClick={handleIncrement} disabled={isLoading}>
        +
      </button>
    </>
  );
};

export default CartQuantityBtn;
