import { SortOrder } from "../../util/SortOrder";

export type FinancialFlowOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  sourceType?: SortOrder;
  date?: SortOrder;
  amount?: SortOrder;
};
