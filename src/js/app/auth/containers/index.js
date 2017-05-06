import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { LoginForm } from '../components';
import { setSession, setAccessToken, destroySession } from '../actions';

class AuthView extends React.Component {
  onLogin(email, password) {
    // Login Logic
    console.log('login in with:', { email, password });
  }

  render() {
    return (
      <div className="container" id="authView">
        <div className="row" >
          <div className="col-md-6 col-sm-12">
            <LoginForm onLogin={(email, password) => this.onLogin(email, password)} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  setSession,
  setAccessToken,
  destroySession,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthView);
