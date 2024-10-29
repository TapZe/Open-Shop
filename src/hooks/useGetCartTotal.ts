import { useSelector } from "react-redux";
import useAuthData from "./useAuthData";
import { RootState } from "../redux/store";

const useGetCartTotal = () => {
    const { cart } = useSelector((state: RootState) => state.persist.cart);
    const { data: userData } = useAuthData();

    // Find the user total item in cart
    const totalItems =
        userData &&
        cart[userData.id]?.reduce((total, item) => total + item.quantity, 0);
    
    const totalPriceUnformated =
        userData &&
        cart[userData.id]?.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    const totalPrice = totalPriceUnformated ? totalPriceUnformated.toFixed(2) : 0.00;
    
    return { totalItems, totalPrice };
}

export default useGetCartTotal;
