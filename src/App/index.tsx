import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Sidebar from '../components/Sidebar';
// Routes
import WhatToCook from '../pages/WhatToCook';
import Products from '../pages/Products';
import Recipes from '../pages/Recipes';
import configureStore from '../store';

import useStyles from './styles';

const store = configureStore();

const App = () => {
  // ----------------- styles ----------------- //
  const classes = useStyles();
  const { app, body } = classes;

  return (
    <Provider store={store}>
      <div className={app}>
        bruh
        <BrowserRouter>
          <Sidebar />
          <div className={body}>
            <Route exact path="/" component={WhatToCook} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/recipes" component={Recipes} />
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
