import prisma from '../../../prisma';
import { IProductRepository } from '../domain/interfaces/product.interface';
import { Product } from '../domain/product';

export class ProductRepositoryPrismaSqlite implements IProductRepository {
  public async addProduct(product: Product): Promise<Product> {
    return await prisma.product.create({
      data: {
        name: product.name,
        price: product.price
      }
    })
  }
}