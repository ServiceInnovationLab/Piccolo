import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { HashRouter, Route } from 'react-router-dom';
import reducers from './reducers/index';
import AppCon from './container/app-container';

const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Piccolo</h1>
          <Route exact path="/" component={AppCon} />
        </div>
      </HashRouter>
    );
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
