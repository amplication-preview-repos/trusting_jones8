import { FreelanceOrderUpdateManyWithoutClientsInput } from "./FreelanceOrderUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  freelanceOrders?: FreelanceOrderUpdateManyWithoutClientsInput;
};
