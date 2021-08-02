import './App.scss';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Header, Footer } from './layouts';
import {
    Home,
    Bags,
    BagDetails
} from './components/index';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
              <Route path="/" component={Home} exact={true} />
              <Route path="/bags" component={Bags} exact={true} />
              <Route path="/bags/details" component={BagDetails} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
