import { OrderService } from '../src/order-management/application/order.service';
import { IOrderRepository } from '../src/order-management/domain/interfaces/order.interface';
import { Order } from '../src/order-management/domain/order';
class MockOrderRepository implements IOrderRepository {
  private order: Order[] = [];

  async addOrder(order: Order) {
    this.order.push(order);
    return order;
  }
}

describe('OrderService', () => {
  let orderService: OrderService;

  beforeEach(() => {
    var mockOrderRepository = new MockOrderRepository();
    orderService = new OrderService(mockOrderRepository);
  });

  test("addOrder adds a order to the database", async () => {
    const order: Order = new Order(1, 2);
    const addedOrder = await orderService.addOrder(1, 2);

    expect(addedOrder.productId).toBe(order.productId);
    expect(addedOrder.total).toBe(order.total);
  })
})