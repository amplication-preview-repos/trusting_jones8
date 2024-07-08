/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FinancialFlowWhereInput } from "./FinancialFlowWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FinancialFlowOrderByInput } from "./FinancialFlowOrderByInput";

@ArgsType()
class FinancialFlowFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FinancialFlowWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FinancialFlowWhereInput, { nullable: true })
  @Type(() => FinancialFlowWhereInput)
  where?: FinancialFlowWhereInput;

  @ApiProperty({
    required: false,
    type: [FinancialFlowOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FinancialFlowOrderByInput], { nullable: true })
  @Type(() => FinancialFlowOrderByInput)
  orderBy?: Array<FinancialFlowOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FinancialFlowFindManyArgs as FinancialFlowFindManyArgs };
