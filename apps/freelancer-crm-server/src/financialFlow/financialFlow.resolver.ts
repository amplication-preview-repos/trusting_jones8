import * as graphql from "@nestjs/graphql";
import { FinancialFlowResolverBase } from "./base/financialFlow.resolver.base";
import { FinancialFlow } from "./base/FinancialFlow";
import { FinancialFlowService } from "./financialFlow.service";

@graphql.Resolver(() => FinancialFlow)
export class FinancialFlowResolver extends FinancialFlowResolverBase {
  constructor(protected readonly service: FinancialFlowService) {
    super(service);
  }
}
