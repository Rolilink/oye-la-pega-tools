import React from 'react';
import PropTypes from 'prop-types';

export default class PasswordInput extends React.Component {
  static propTypes = {
    onInputChange: PropTypes.func.isRequired,
  }

  onInputChange(evt) {
    this.props.onInputChange(evt.target.value);
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input className="form-control" name="password" type="password" onChange={evt => this.onInputChange(evt)} />
      </div>
    );
  }
}
