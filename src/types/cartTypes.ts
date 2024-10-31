import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { Product } from "./productTypes";
import { SerializedError } from '@reduxjs/toolkit';

interface CartProduct extends Product {
    quantity: number;
    checkout: boolean;
}

export type Cart = {
    [userId: number]: CartProduct[];
}

export type CartState = {
    cart: Cart;
};

export type CartProductProps = {
    product: CartProduct;
}

export type ManyCartProduct = {
    products: CartProduct[];
} 

export interface CartProductsGridProps extends ManyCartProduct {
  isLoading?: boolean;
  error?: FetchBaseQueryError | SerializedError | null;
}

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

export type ProductCartIdPayload = {
    userId: number;
    productId: number;
}
