import React from 'react';
import '../styles/BoringCard.css';

export default class BoringCard extends React.PureComponent {
  render() {
    return (
      <div className="Card BoringCard" onClick={this.props.onClick}>
        <p className="card-text">Todas estan en panga!!</p>
      </div>
    );
  }
}
