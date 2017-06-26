import React from 'react';
import PropTypes from 'prop-types';
import '../styles/BoringCard.css';

export default class BoringCard extends React.PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className="Card BoringCard" onClick={this.props.onClick}>
        <p className="card-text">Todas estan en panga!!</p>
      </div>
    );
  }
}
