import { Order } from '../order';
export interface IOrderRepository {
  addOrder(order: Order): Promise<Order>;
}