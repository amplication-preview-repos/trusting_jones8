/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FreelanceOrderWhereInput } from "./FreelanceOrderWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FreelanceOrderListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FreelanceOrderWhereInput,
  })
  @ValidateNested()
  @Type(() => FreelanceOrderWhereInput)
  @IsOptional()
  @Field(() => FreelanceOrderWhereInput, {
    nullable: true,
  })
  every?: FreelanceOrderWhereInput;

  @ApiProperty({
    required: false,
    type: () => FreelanceOrderWhereInput,
  })
  @ValidateNested()
  @Type(() => FreelanceOrderWhereInput)
  @IsOptional()
  @Field(() => FreelanceOrderWhereInput, {
    nullable: true,
  })
  some?: FreelanceOrderWhereInput;

  @ApiProperty({
    required: false,
    type: () => FreelanceOrderWhereInput,
  })
  @ValidateNested()
  @Type(() => FreelanceOrderWhereInput)
  @IsOptional()
  @Field(() => FreelanceOrderWhereInput, {
    nullable: true,
  })
  none?: FreelanceOrderWhereInput;
}
export { FreelanceOrderListRelationFilter as FreelanceOrderListRelationFilter };
