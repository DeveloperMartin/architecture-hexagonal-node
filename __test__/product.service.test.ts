import { IProductRepository } from '../src/product-management/domain/interfaces/product.interface';

import { ProductService } from 'src/product-management/application/product.service';
import { Product } from 'src/product-management/domain/product';

class MockProductRepository implements IProductRepository {
  private products: Product[] = []
  addProduct(product: Product): Promise<Product> {
    this.products.push(product);
    return Promise.resolve(product);
  }
}

describe('ProductService', () => {
  let productService: ProductService;

  beforeEach(() => {
    const mockProductRepository = new MockProductRepository();
    productService = new ProductService(mockProductRepository);
  });

  test("addProducts adds a product to the database", async () => {
    const product: Product = new Product("test", 100);
    const addedProduct = await productService.addProduct(product.name, product.price);

    expect(addedProduct.name).toBe(product.productId);
    expect(addedProduct.price).toBe(product.price);
  })
})