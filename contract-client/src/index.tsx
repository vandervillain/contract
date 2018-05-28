import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {createStore} from 'redux';
import {Home} from './components/home';
import {Layout} from './components/layout';
import './glyphs/css/glyphicons.css';
import './index.css';
import contractApp from './reducers/reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(contractApp);

ReactDOM.render((
  <Provider store={store}>
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="*" component={Home} />
      </Switch>
    </Layout>
  </BrowserRouter>
</Provider>
), document.getElementById('root') as HTMLElement);

registerServiceWorker();
