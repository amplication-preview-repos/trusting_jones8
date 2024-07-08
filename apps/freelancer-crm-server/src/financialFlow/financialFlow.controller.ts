import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FinancialFlowService } from "./financialFlow.service";
import { FinancialFlowControllerBase } from "./base/financialFlow.controller.base";

@swagger.ApiTags("financialFlows")
@common.Controller("financialFlows")
export class FinancialFlowController extends FinancialFlowControllerBase {
  constructor(protected readonly service: FinancialFlowService) {
    super(service);
  }
}
