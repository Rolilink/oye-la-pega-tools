import React from 'react';
import PropTypes from 'prop-types';

export default class EmailInput extends React.Component {
  static propTypes = {
    onInputChange: PropTypes.func.isRequired,
  }

  onInputChange(evt) {
    this.props.onInputChange(evt.target.value);
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input className="form-control" name="email" type="text" onChange={evt => this.onInputChange(evt)} />
      </div>
    );
  }
}
