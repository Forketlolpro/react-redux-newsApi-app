import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import {fetchNews} from '../../actions/actions';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchNews();
  }

  render () {
    return (
      <div className="App">
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
    return {
      news: state.news.items,
      isFetching: state.news.isFetching,
      loggedIn: state.app.loggedIn
    }
}

export default connect(mapStateToProps, {fetchNews})(App)
  