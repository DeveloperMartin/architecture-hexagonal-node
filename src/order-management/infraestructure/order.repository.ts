import { IOrderRepository } from '../domain/interfaces/order.interface';
import { Order } from '../domain/order';
import prisma from '../../../prisma/index';

export class OrderRepositoryPrismaSqlite implements IOrderRepository {
  public async addOrder(order: Order): Promise<Order> {
    return await prisma.order.create({
      data: {
        total: order.total,
        productId: order.productId
      }
    })
  }
}