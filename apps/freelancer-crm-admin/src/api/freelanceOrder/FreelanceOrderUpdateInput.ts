import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type FreelanceOrderUpdateInput = {
  description?: string | null;
  price?: number | null;
  client?: ClientWhereUniqueInput | null;
};
