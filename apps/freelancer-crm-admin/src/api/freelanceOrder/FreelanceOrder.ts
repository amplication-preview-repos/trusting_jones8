import { Client } from "../client/Client";

export type FreelanceOrder = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  price: number | null;
  client?: Client | null;
};
