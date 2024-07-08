import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type FreelanceOrderCreateInput = {
  description?: string | null;
  price?: number | null;
  client?: ClientWhereUniqueInput | null;
};
