import React, { Component } from 'react';
import App from '../components/App';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';

class AppCon extends Component {
  render() {
    return (
      <div>
        <App />
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, actionCreators)(AppCon);
