import * as graphql from "@nestjs/graphql";
import { TelegramUpdate } from "../telegram/TelegramUpdate";
import { SendTelegramMessageInput } from "../telegram/SendTelegramMessageInput";
import { TelegramService } from "./telegram.service";

export class TelegramResolver {
  constructor(protected readonly service: TelegramService) {}

  @graphql.Query(() => [TelegramUpdate])
  async ReceiveTelegramUpdates(
    @graphql.Args()
    args: string
  ): Promise<TelegramUpdate[]> {
    return this.service.ReceiveTelegramUpdates(args);
  }

  @graphql.Mutation(() => String)
  async SendTelegramMessage(
    @graphql.Args()
    args: SendTelegramMessageInput
  ): Promise<string> {
    return this.service.SendTelegramMessage(args);
  }
}
