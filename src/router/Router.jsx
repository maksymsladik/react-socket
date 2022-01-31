import { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { baseUrl } from "../utils/constants";

const TickersPage = lazy(() => import("../Containers/TickersPage"));

export const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path={baseUrl} component={TickersPage} />

        <Redirect to={baseUrl} />
      </Switch>
    </Suspense>
  );
};
