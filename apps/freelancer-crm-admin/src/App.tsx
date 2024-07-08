import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { FreelanceOrderList } from "./freelanceOrder/FreelanceOrderList";
import { FreelanceOrderCreate } from "./freelanceOrder/FreelanceOrderCreate";
import { FreelanceOrderEdit } from "./freelanceOrder/FreelanceOrderEdit";
import { FreelanceOrderShow } from "./freelanceOrder/FreelanceOrderShow";
import { BlogList } from "./blog/BlogList";
import { BlogCreate } from "./blog/BlogCreate";
import { BlogEdit } from "./blog/BlogEdit";
import { BlogShow } from "./blog/BlogShow";
import { ClientList } from "./client/ClientList";
import { ClientCreate } from "./client/ClientCreate";
import { ClientEdit } from "./client/ClientEdit";
import { ClientShow } from "./client/ClientShow";
import { FinancialFlowList } from "./financialFlow/FinancialFlowList";
import { FinancialFlowCreate } from "./financialFlow/FinancialFlowCreate";
import { FinancialFlowEdit } from "./financialFlow/FinancialFlowEdit";
import { FinancialFlowShow } from "./financialFlow/FinancialFlowShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"FreelancerCRM"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="FreelanceOrder"
          list={FreelanceOrderList}
          edit={FreelanceOrderEdit}
          create={FreelanceOrderCreate}
          show={FreelanceOrderShow}
        />
        <Resource
          name="Blog"
          list={BlogList}
          edit={BlogEdit}
          create={BlogCreate}
          show={BlogShow}
        />
        <Resource
          name="Client"
          list={ClientList}
          edit={ClientEdit}
          create={ClientCreate}
          show={ClientShow}
        />
        <Resource
          name="FinancialFlow"
          list={FinancialFlowList}
          edit={FinancialFlowEdit}
          create={FinancialFlowCreate}
          show={FinancialFlowShow}
        />
      </Admin>
    </div>
  );
};

export default App;
