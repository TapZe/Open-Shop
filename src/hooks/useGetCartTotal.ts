import { useSelector } from "react-redux";
import useAuthData from "./useAuthData";
import { RootState } from "../redux/store";

const useGetCartTotal = () => {
    const { cart } = useSelector((state: RootState) => state.persist.cart);
    const { data: userData } = useAuthData();

    // Ensure userData is available and cart exists for the user
    if (!userData || !cart[userData.id]) {
        return { totalItems: 0, totalPrice: "0.00" };
    }

    // Filter items where product.checkout is true
    const filteredItems = cart[userData.id].filter(item => item.checkout);

    // Calculate total items and total price
    const totalItems = filteredItems.reduce((total, item) => total + item.quantity, 0);
    const totalPriceUnformated = filteredItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    const totalPrice = totalPriceUnformated ? totalPriceUnformated.toFixed(2) : "0.00";
    
    return { totalItems, totalPrice };
}

export default useGetCartTotal;
