export type FinancialFlow = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  sourceType?: "Option1" | null;
  date: Date | null;
  amount: number | null;
};
