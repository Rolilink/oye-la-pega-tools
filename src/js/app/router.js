import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import _ from 'lodash';

import { routes as notFoundRoutes } from '../modules/notFound';
import { routes as authRoutes } from '../modules/auth';
import { routes as deckRoutes } from '../modules/decks';
import { routes as gameRoutes } from '../modules/game';

export class AppRouter extends React.Component {
  get isLoggedIn() {
    const { user } = this.props.session;

    return !_.isEmpty(user);
  }

  get publicRoutes() {
    return (
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/auth/login" />} />
        {authRoutes('/auth')}
        {notFoundRoutes('')}
      </Switch>
    );
  }

  get privateRoutes() {
    return (
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/decks/list" />} />
        {deckRoutes('/decks')}
        {gameRoutes('/games')}
        {notFoundRoutes('')}
      </Switch>
    );
  }

  get routes() {
    if (!this.isLoggedIn) {
      return this.publicRoutes;
    }

    return this.privateRoutes;
  }

  render() {
    return (
      <Router>
        {this.routes}
      </Router>
    );
  }
}


function mapStateToProps(state) {
  const { auth } = state;
  const { session } = auth;

  return {
    session,
  };
}

export default connect(mapStateToProps)(AppRouter);
