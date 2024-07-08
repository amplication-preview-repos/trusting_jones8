import { FinancialFlow as TFinancialFlow } from "../api/financialFlow/FinancialFlow";

export const FINANCIALFLOW_TITLE_FIELD = "id";

export const FinancialFlowTitle = (record: TFinancialFlow): string => {
  return record.id?.toString() || String(record.id);
};
