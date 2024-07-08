import { FreelanceOrder } from "../freelanceOrder/FreelanceOrder";

export type Client = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  phone: string | null;
  freelanceOrders?: Array<FreelanceOrder>;
};
