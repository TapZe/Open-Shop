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

export type ProductCardProps = {
  product: Product;
}

export type ProductQuantity = {
  id: number;
  quantity: number;
}

export type ProductQuantityState = {
  productQuantity: ProductQuantity[];
}