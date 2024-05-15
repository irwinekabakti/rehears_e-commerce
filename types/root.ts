import { Product, FavoriteProducts } from "./product";

export interface Root {
  products: Product[];
  FavoriteProduct: FavoriteProducts[];
  cart: [];
}
