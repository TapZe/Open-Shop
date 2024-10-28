import { Product } from "./productTypes";

interface CartProduct extends Product {
    quantity: number;
}

export type Cart = {
    [userId: number]: CartProduct[];
}

export type CartState = {
    cart: Cart;
};

export type AddToCartPayload = {
    userId: number;
    product: Product;
}

export type DecreaseFromCartPayload = {
    userId: number;
    productId: number;
}

export type ProductQuantityInCartPayload = {
    userId: number;
    productId: number;
    quantity: number;
}

export type RemoveProductFromCartPayload = {
    userId: number;
    productId: number;
}
