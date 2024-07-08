import { FreelanceOrderWhereInput } from "./FreelanceOrderWhereInput";
import { FreelanceOrderOrderByInput } from "./FreelanceOrderOrderByInput";

export type FreelanceOrderFindManyArgs = {
  where?: FreelanceOrderWhereInput;
  orderBy?: Array<FreelanceOrderOrderByInput>;
  skip?: number;
  take?: number;
};
