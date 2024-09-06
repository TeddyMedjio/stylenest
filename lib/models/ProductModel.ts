export type Product = {
  name: string;
  slug: string;
  image_url: string;
  price: number;
  description: string;
  category: string;
  color?: [] | string;
  features: [];
  fabric: [];
  shipping: [];
};
export type Collection = {
  name: string;
  slug: string;
  description: string;
  image_url: string;
};
