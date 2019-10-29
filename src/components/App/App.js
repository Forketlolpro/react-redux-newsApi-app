import React from 'react';
import Login from '../Login/Login';
import Home from '../Home/Home';
import { connect } from 'react-redux';
import {fetchNewsIfNeeded, logIn} from '../../actions/actions';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    if (this.props.loggedIn) {
      this.props.dispatch(fetchNewsIfNeeded());
    }
  }

  render () {
    return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">{!this.props.loggedIn ? <Redirect to="/login" /> : <Home />}</Route>
          <Router path="/login">
            <Login loginHandler={()=>{this.props.dispatch(logIn())}}/>
          </Router>
        </Switch>
      </Router>
    </>
    );
  }
}

const mapStateToProps = state => {
    return {
      news: state.news.items,
      isFetching: state.news.isFetching,
      loggedIn: state.app.loggedIn
    }
}

export default connect(mapStateToProps)(App)
