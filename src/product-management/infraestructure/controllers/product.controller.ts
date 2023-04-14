import { ProductService } from "../../application/product.service";
import { Body, Controller, Post, Route } from "tsoa";
import { ProductRepositoryPrismaSqlite } from "../product.repository";
import { Product } from "../../domain/product";

@Route('product')
export class ProductController extends Controller {
  private readonly productService: ProductService;

  constructor() {
    super();
    const productService = new ProductRepositoryPrismaSqlite();
    this.productService = new ProductService(productService)
  }

  @Post() 
  public async addProduct(
    @Body() requestBody: {name: string, price: number } ): Promise<Product> {
      const {name, price} = requestBody;
      return await this.productService.addProduct(name, price);
  }
 }