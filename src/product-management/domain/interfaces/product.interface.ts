import { Product } from "../product";

export interface IProductRepository{
    addProduct(product: Product): Promise<Product>
}