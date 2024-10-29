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
  const { productQuantity } = useSelector(
    (state: RootState) => state.persist.productQuantity
  );
  const dispatch = useDispatch();
  const { data: userData, isLoading } = useAuthData();
  const [quantity, setQuantity] = useState(0);

  // Find the current product quantity
  const currentProduct = productQuantity.find((item) => item.id === product.id);
  const currentQuantity = currentProduct ? currentProduct.quantity : 0;

  // Check if the product is in the cart and get its quantity
  const productInCart =
    userData && cart[userData.id]?.find((item) => item.id === product.id);
  const cartQuantity = productInCart ? productInCart.quantity : 0;

  useEffect(() => {
    setQuantity(cartQuantity);
  }, [cartQuantity]);

  const handleIncrement = () => {
    if (userData && quantity < currentQuantity) {
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

  const handleQuantityChange = (value: number) => {
    if (userData) {
      const adjustedValue = Math.floor(
        Math.min(currentQuantity, Math.max(0, Number(value)))
      ); // Ensure quantity doesn't go below 0 and doesn't go above the product current quantity
      setQuantity(adjustedValue);
      dispatch(
        changeProductQuantityInCart({
          userId: userData.id,
          productId: product.id,
          quantity: adjustedValue,
        })
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const value = Number(e.currentTarget.value);
      handleQuantityChange(value);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = Number(e.currentTarget.value);
    handleQuantityChange(value);
  };

  return (
    <>
      <div className="grid grid-cols-3">
        <button
          className="btn btn-outline btn-primary"
          onClick={handleDecrement}
          disabled={isLoading || quantity === 0}
        >
          -
        </button>
        <input
          className="input input-secondary"
          type="number"
          value={quantity}
          min={0}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setQuantity(Math.floor(Number(e.target.value)));
          }}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          disabled={isLoading}
        />
        <button
          className="btn btn-outline btn-primary"
          onClick={handleIncrement}
          disabled={isLoading}
        >
          +
        </button>
      </div>
    </>
  );
};

export default CartQuantityBtn;
