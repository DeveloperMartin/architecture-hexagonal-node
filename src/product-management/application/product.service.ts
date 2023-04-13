import { IProductRepository } from '../domain/interfaces/product.interface';
import { Product } from '../domain/product';

export class ProductService {
  private productRepository: IProductRepository;

  constructor(productRepository: IProductRepository){
    this.productRepository = productRepository;
  }

  public async addProduct(name: string, price: number): Promise<Product> {
    const product: Product = new Product(name, price);
    return await this.productRepository.addProduct(product)
  }
}