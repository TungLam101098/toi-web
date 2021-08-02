import './App.scss';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Header, Footer } from './layouts';
import {
    Home
} from './components/index';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
              <Route path="/" component={Home} exact={true} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
