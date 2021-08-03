import './App.scss';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Header, Footer } from './layouts';
import {
    Home,
    Bags,
    BagDetails,
    DesignYourOwn,
    DesignDetails,
    DesignCustomize,
    Collection,
    CollectionDetail,
    OurStory
} from './components/index';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
              <Route path="/" component={Home} exact={true} />
              <Route path="/design-your-own" component={DesignYourOwn} exact={true} />
              <Route path="/design-your-own/details" component={DesignDetails} />
              <Route path="/design-your-own/customize" component={DesignCustomize} />
              <Route path="/collections" component={Collection} exact={true} />
              <Route path="/collections/details" component={CollectionDetail} />
              <Route path="/bags" component={Bags} exact={true} />
              <Route path="/bags/details" component={BagDetails} />
              <Route path="/our-story" component={OurStory} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
