/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { FreelanceOrderWhereUniqueInput } from "../../freelanceOrder/base/FreelanceOrderWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class FreelanceOrderCreateNestedManyWithoutClientsInput {
  @Field(() => [FreelanceOrderWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FreelanceOrderWhereUniqueInput],
  })
  connect?: Array<FreelanceOrderWhereUniqueInput>;
}

export { FreelanceOrderCreateNestedManyWithoutClientsInput as FreelanceOrderCreateNestedManyWithoutClientsInput };