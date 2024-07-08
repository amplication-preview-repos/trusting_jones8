/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { FinancialFlowService } from "../financialFlow.service";
import { FinancialFlowCreateInput } from "./FinancialFlowCreateInput";
import { FinancialFlow } from "./FinancialFlow";
import { FinancialFlowFindManyArgs } from "./FinancialFlowFindManyArgs";
import { FinancialFlowWhereUniqueInput } from "./FinancialFlowWhereUniqueInput";
import { FinancialFlowUpdateInput } from "./FinancialFlowUpdateInput";

export class FinancialFlowControllerBase {
  constructor(protected readonly service: FinancialFlowService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FinancialFlow })
  async createFinancialFlow(
    @common.Body() data: FinancialFlowCreateInput
  ): Promise<FinancialFlow> {
    return await this.service.createFinancialFlow({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        sourceType: true,
        date: true,
        amount: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [FinancialFlow] })
  @ApiNestedQuery(FinancialFlowFindManyArgs)
  async financialFlows(
    @common.Req() request: Request
  ): Promise<FinancialFlow[]> {
    const args = plainToClass(FinancialFlowFindManyArgs, request.query);
    return this.service.financialFlows({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        sourceType: true,
        date: true,
        amount: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: FinancialFlow })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async financialFlow(
    @common.Param() params: FinancialFlowWhereUniqueInput
  ): Promise<FinancialFlow | null> {
    const result = await this.service.financialFlow({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        sourceType: true,
        date: true,
        amount: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: FinancialFlow })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateFinancialFlow(
    @common.Param() params: FinancialFlowWhereUniqueInput,
    @common.Body() data: FinancialFlowUpdateInput
  ): Promise<FinancialFlow | null> {
    try {
      return await this.service.updateFinancialFlow({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          sourceType: true,
          date: true,
          amount: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: FinancialFlow })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteFinancialFlow(
    @common.Param() params: FinancialFlowWhereUniqueInput
  ): Promise<FinancialFlow | null> {
    try {
      return await this.service.deleteFinancialFlow({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          sourceType: true,
          date: true,
          amount: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}