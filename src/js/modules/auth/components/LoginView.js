import React from 'react';
import PropTypes from 'prop-types';
import { LoginForm } from '../components';
import { connectToLoginContainer } from '../containers';

class LoginView extends React.Component {
  static propTypes = {
    loginWithEmailAndPassword: PropTypes.func.isRequired,
  }

  login(email, password) {
    this.props.loginWithEmailAndPassword(email, password);
  }

  render() {
    return (
      <div className="container" id="authView">
        <div className="row" >
          <div className="col-md-6 col-md-offset-3 col-sm-12" style={{ marginTop: '150px' }}>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Inicio de Sesion</h3>
              </div>
              <div className="panel-body">
                <LoginForm onSubmit={(email, password) => this.login(email, password)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connectToLoginContainer(LoginView);
