import { FreelanceOrderCreateNestedManyWithoutClientsInput } from "./FreelanceOrderCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  freelanceOrders?: FreelanceOrderCreateNestedManyWithoutClientsInput;
};
