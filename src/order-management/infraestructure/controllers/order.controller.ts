import { OrderService } from "../../application/order.service";
import { Body, Controller, Post, Route } from "tsoa";
import { OrderRepositoryPrismaSqlite } from "../order.repository";
import { Order } from '../../domain/order';

@Route('order')
export class OrderController extends Controller {
  private readonly orderService: OrderService;

  constructor() {
    super();
    var orderRepository = new OrderRepositoryPrismaSqlite();
    this.orderService = new OrderService(orderRepository)
  }

  @Post() 
  public async addOrder(
    @Body() requestBody: {productId: number, total: number } ): Promise<Order> {
      const {total, productId} = requestBody;
      return await this.orderService.addOrder(productId, total);
  }
 }