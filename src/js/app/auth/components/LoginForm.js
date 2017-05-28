import React from 'react';
import PropTypes from 'prop-types';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

const getInitialState = () => ({ email: '', password: '' });

export default class LoginForm extends React.Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = getInitialState();
  }

  onSubmit(evt) {
    const { email, password } = this.state;
    evt.preventDefault();
    this.props.onSubmit(email, password);
  }

  onInputChange(input, value) {
    this.setState({ [input]: value });
  }

  render() {
    const { email, password } = this.state;

    return (
      <form className="form" onSubmit={e => this.onSubmit(e)}>
        <EmailInput onInputChange={val => this.onInputChange('email', val)} email={email} />
        <PasswordInput onInputChange={val => this.onInputChange('password', val)} password={password} />
        <div className="form-group">
          <input type="submit" className="btn btn-primary" value="Iniciar Sesion" />
        </div>
      </form>
    );
  }
}
