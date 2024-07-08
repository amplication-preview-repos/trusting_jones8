import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type FinancialFlowWhereInput = {
  id?: StringFilter;
  sourceType?: "Option1";
  date?: DateTimeNullableFilter;
  amount?: FloatNullableFilter;
};
