import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
}

export type AllProductsResponse = Product[];

export type CategoryResponse = string[];

export type CategorySectionProps = {
  category: string;
}

export type ProductProps = {
  product: Product;
}

export type ManyProductsProps = {
  product: Product[];
}

export interface ProductsGridProps extends ManyProductsProps {
  isLoading?: boolean;
  error?: FetchBaseQueryError | SerializedError | null;
}

export type ProductQuantity = {
  id: number;
  quantity: number;
}

export type ProductQuantityState = {
  productQuantity: ProductQuantity[];
}