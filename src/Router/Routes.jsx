import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withOidcSecure, OidcSecure } from '@axa-fr/react-oidc-context';
import MainPage from '../page/Main';

const PageNotFound = () => <div>Page not found</div>;

const Routes = () => (
  <Switch>
    <Route exact path="/">
      Home
    </Route>
    <Route path="/main">
      <OidcSecure>
        <MainPage />
      </OidcSecure>
    </Route>
    <Route component={PageNotFound} />
  </Switch>
);

export default Routes;
