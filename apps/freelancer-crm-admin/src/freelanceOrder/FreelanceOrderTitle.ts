import { FreelanceOrder as TFreelanceOrder } from "../api/freelanceOrder/FreelanceOrder";

export const FREELANCEORDER_TITLE_FIELD = "id";

export const FreelanceOrderTitle = (record: TFreelanceOrder): string => {
  return record.id?.toString() || String(record.id);
};
