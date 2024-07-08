import { Module } from "@nestjs/common";
import { FreelanceOrderModuleBase } from "./base/freelanceOrder.module.base";
import { FreelanceOrderService } from "./freelanceOrder.service";
import { FreelanceOrderController } from "./freelanceOrder.controller";
import { FreelanceOrderResolver } from "./freelanceOrder.resolver";

@Module({
  imports: [FreelanceOrderModuleBase],
  controllers: [FreelanceOrderController],
  providers: [FreelanceOrderService, FreelanceOrderResolver],
  exports: [FreelanceOrderService],
})
export class FreelanceOrderModule {}
