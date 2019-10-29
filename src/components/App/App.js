import React from 'react';
import Login from '../Login/Login';
import Home from '../Home/Home';
import { connect } from 'react-redux';
import {fetchNews, logIn} from '../../actions/actions';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    if (localStorage.getItem('loggedIn') === 'true') {
      this.props.dispatch(logIn());
    }
  }

  componentDidMount () {
    this.props.dispatch(fetchNews());
  }

  render () {
    return (
    <>
      <div className="App">APP</div>
      <Router>
        <Switch>
          <Route exact path="/">{this.props.loggedIn !== true ? <Redirect to="/login" /> : <Redirect to="/" />}</Route>
          <Router path="/login">
            <Login/>
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
