import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import AppCon from './container/app-container';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import { HashRouter, Route } from 'react-router-dom';

const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Project Boilerplate</h1>
          <Route exact path="/" component={AppCon} />
        </div>
      </HashRouter>
    );
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
