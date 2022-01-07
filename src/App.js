import { BrowserRouter as Router } from 'react-router-dom';
import "./ie.polyfills";
import { AuthenticationProvider, oidcLog, InMemoryWebStorage } from '@axa-fr/react-oidc-context';
import CustomCallback from './CustomCallBack';
import oidcConfiguration from './configurations';
import Routes from './Router/Routes';
import './App.css';

function App() {
  return (
    <AuthenticationProvider
    configuration={oidcConfiguration}
    loggerLevel={oidcLog.DEBUG}
    isEnabled
    callbackComponentOverride={CustomCallback}
    sessionLostComponent={CustomCallback}
    UserStore={InMemoryWebStorage}
  >
      <Router>
        <Routes />
      </Router>
  </AuthenticationProvider>
  );
}

export default App;
