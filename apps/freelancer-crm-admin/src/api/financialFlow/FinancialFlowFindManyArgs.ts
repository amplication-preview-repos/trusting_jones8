import { FinancialFlowWhereInput } from "./FinancialFlowWhereInput";
import { FinancialFlowOrderByInput } from "./FinancialFlowOrderByInput";

export type FinancialFlowFindManyArgs = {
  where?: FinancialFlowWhereInput;
  orderBy?: Array<FinancialFlowOrderByInput>;
  skip?: number;
  take?: number;
};
