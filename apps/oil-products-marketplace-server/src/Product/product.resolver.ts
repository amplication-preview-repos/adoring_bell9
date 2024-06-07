import * as graphql from "@nestjs/graphql";
import { ProductService } from "./product.service";

export class ProductResolver {
  constructor(protected readonly service: ProductService) {}
}
