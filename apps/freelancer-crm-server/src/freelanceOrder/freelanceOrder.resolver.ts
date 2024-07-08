import * as graphql from "@nestjs/graphql";
import { FreelanceOrderResolverBase } from "./base/freelanceOrder.resolver.base";
import { FreelanceOrder } from "./base/FreelanceOrder";
import { FreelanceOrderService } from "./freelanceOrder.service";

@graphql.Resolver(() => FreelanceOrder)
export class FreelanceOrderResolver extends FreelanceOrderResolverBase {
  constructor(protected readonly service: FreelanceOrderService) {
    super(service);
  }
}
