import { SortOrder } from "../../util/SortOrder";

export type FreelanceOrderOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  price?: SortOrder;
  clientId?: SortOrder;
};
