import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FreelanceOrderService } from "./freelanceOrder.service";
import { FreelanceOrderControllerBase } from "./base/freelanceOrder.controller.base";

@swagger.ApiTags("freelanceOrders")
@common.Controller("freelanceOrders")
export class FreelanceOrderController extends FreelanceOrderControllerBase {
  constructor(protected readonly service: FreelanceOrderService) {
    super(service);
  }
}
