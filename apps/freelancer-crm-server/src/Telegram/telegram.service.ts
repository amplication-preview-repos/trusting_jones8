import { Injectable } from "@nestjs/common";
import { TelegramUpdate } from "../telegram/TelegramUpdate";
import { SendTelegramMessageInput } from "../telegram/SendTelegramMessageInput";

@Injectable()
export class TelegramService {
  constructor() {}
  async ReceiveTelegramUpdates(args: string): Promise<TelegramUpdate[]> {
    throw new Error("Not implemented");
  }
  async SendTelegramMessage(args: SendTelegramMessageInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
