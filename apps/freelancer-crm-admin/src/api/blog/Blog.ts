export type Blog = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  content: string | null;
  advertisingRevenue: number | null;
};
