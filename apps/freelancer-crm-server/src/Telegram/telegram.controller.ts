import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TelegramService } from "./telegram.service";
import { SendTelegramMessageInput } from "../telegram/SendTelegramMessageInput";
import { TelegramUpdate } from "../telegram/TelegramUpdate";

@swagger.ApiTags("telegrams")
@common.Controller("telegrams")
export class TelegramController {
  constructor(protected readonly service: TelegramService) {}

  @common.Get("/telegram/updates")
  @swagger.ApiOkResponse({
    type: TelegramUpdate
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ReceiveTelegramUpdates(
    @common.Body()
    body: SendTelegramMessageInput
  ): Promise<TelegramUpdate[]> {
        return this.service.ReceiveTelegramUpdates(body);
      }

  @common.Post("/telegram/send")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SendTelegramMessage(
    @common.Body()
    body: SendTelegramMessageInput
  ): Promise<string> {
        return this.service.SendTelegramMessage(body);
      }
}
