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
    OurStory,
    News,
    NewsDetail,
    Contact
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
              <Route path="/news" component={News} exact={true} />
              <Route path="/news/details" component={NewsDetail} />
              <Route path="/bags" component={Bags} exact={true} />
              <Route path="/bags/details" component={BagDetails} />
              <Route path="/our-story" component={OurStory} />
              <Route path="/contact" component={Contact} exact={true} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
