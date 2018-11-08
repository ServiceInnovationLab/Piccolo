import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import AppCon from './container/app-container';

class App extends React.Component {
  render() {
    return <AppCon />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
