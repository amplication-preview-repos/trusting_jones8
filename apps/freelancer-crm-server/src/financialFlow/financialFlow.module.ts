import { Module } from "@nestjs/common";
import { FinancialFlowModuleBase } from "./base/financialFlow.module.base";
import { FinancialFlowService } from "./financialFlow.service";
import { FinancialFlowController } from "./financialFlow.controller";
import { FinancialFlowResolver } from "./financialFlow.resolver";

@Module({
  imports: [FinancialFlowModuleBase],
  controllers: [FinancialFlowController],
  providers: [FinancialFlowService, FinancialFlowResolver],
  exports: [FinancialFlowService],
})
export class FinancialFlowModule {}
