export type product = {
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

export type allProductsResponse = product[];

export type categoryResponse = string[];

export type categorySectionProps = {
  category: string;
}

export type productCardProps = {
  product: product;
}