import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAuthData from "../../../hooks/useAuthData";
import { useDispatch, useSelector } from "react-redux";
import {
  removeProduct,
  saveProduct,
} from "../../../redux/reducers/wishListSlice";
import { RootState } from "../../../redux/store";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ProductProps } from "../../../types/productTypes";

const AddWishlistBtn: React.FC<ProductProps> = ({ product }) => {
  const { wishList } = useSelector(
    (state: RootState) => state.persist.wishList
  );
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: userData, isLoading } = useAuthData();
  const isSaved =
    userData && wishList[userData.id]?.some((item) => item.id === product.id);

  const handleWishBtn = () => {
    if (userData) {
      if (isSaved) {
        const payload = { productId: product.id, userId: userData?.id };
        dispatch(removeProduct(payload));
      } else {
        const payload = { wishList: product, userId: userData?.id };
        dispatch(saveProduct(payload));
      }
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 300);
    } else {
      navigate("/auth/login");
    }
  };

  return (
    <>
      <div
        className="tooltip tooltip-left absolute top-2 right-2"
        data-tip={isSaved ? "Remove from wishlist" : "Add to wishlist"}
      >
        <button
          className={`btn btn-sm btn-primary btn-outline transform transition-all duration-300 ease-in-out 
            ${isClicked && "animate-ping"}`}
          onClick={handleWishBtn}
          disabled={isLoading}
          aria-label={isSaved ? "Remove from wishlist" : "Add to wishlist"}
        >
          <FontAwesomeIcon icon={isSaved ? faHeartSolid : faHeartRegular} />
        </button>
      </div>
    </>
  );
};

export default AddWishlistBtn;
