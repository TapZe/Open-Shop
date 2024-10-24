export type product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export type allProductsResponse = product[];

export type categoryResponse = string[];

export type categorySectionProps = {
  category: string;
}