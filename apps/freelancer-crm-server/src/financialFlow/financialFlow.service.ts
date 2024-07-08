import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FinancialFlowServiceBase } from "./base/financialFlow.service.base";

@Injectable()
export class FinancialFlowService extends FinancialFlowServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
