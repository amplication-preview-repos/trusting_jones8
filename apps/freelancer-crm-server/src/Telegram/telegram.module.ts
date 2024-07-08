import { Module } from "@nestjs/common";
import { TelegramService } from "./telegram.service";
import { TelegramController } from "./telegram.controller";
import { TelegramResolver } from "./telegram.resolver";

@Module({
  controllers: [TelegramController],
  providers: [TelegramService, TelegramResolver],
  exports: [TelegramService],
})
export class TelegramModule {}
