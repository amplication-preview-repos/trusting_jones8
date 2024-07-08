import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FreelanceOrderListRelationFilter } from "../freelanceOrder/FreelanceOrderListRelationFilter";

export type ClientWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
  phone?: StringNullableFilter;
  freelanceOrders?: FreelanceOrderListRelationFilter;
};
