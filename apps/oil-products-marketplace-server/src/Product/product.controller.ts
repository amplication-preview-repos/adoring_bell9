import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ProductService } from "./product.service";

@swagger.ApiTags("products")
@common.Controller("products")
export class ProductController {
  constructor(protected readonly service: ProductService) {}
}
