import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ObjectType("TelegramUpdateObject")
class TelegramUpdate {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    updateId!: string;

    @Field(() => GraphQLJSON, {
        nullable: true
    })
    message?: InputJsonValue;
}

export { TelegramUpdate as TelegramUpdate };