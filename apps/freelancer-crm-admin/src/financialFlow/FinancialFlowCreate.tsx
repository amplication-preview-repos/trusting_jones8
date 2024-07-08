import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const FinancialFlowCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="sourceType"
          label="sourceType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="date" source="date" />
        <NumberInput label="amount" source="amount" />
      </SimpleForm>
    </Create>
  );
};
