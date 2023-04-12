export class Order {
  orderId: number;
  total: number;
  productId: number;
  createdAt: Date;

  constructor(productId: number, total: number) {

    if(total > 3){
      throw new Error('No podes comprar mas de 2 productos')
    }

    this.orderId = -1;
    this.productId = productId;
    this.total = total;
    this.createdAt = new Date();
  }
}