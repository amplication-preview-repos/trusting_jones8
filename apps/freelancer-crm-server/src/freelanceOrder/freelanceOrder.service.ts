import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FreelanceOrderServiceBase } from "./base/freelanceOrder.service.base";

@Injectable()
export class FreelanceOrderService extends FreelanceOrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
