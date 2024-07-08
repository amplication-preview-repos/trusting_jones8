import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type FreelanceOrderWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  price?: FloatNullableFilter;
  client?: ClientWhereUniqueInput;
};
