import React from 'react';
import PropTypes from 'prop-types';
import '../styles/QuestionCard.css';

export default class QuestionCard extends React.PureComponent {
  static propTypes = {
    card: PropTypes.any.isRequired,
  }

  get formattedText() {
    const { text } = this.props.card;

    return text
      .replace(/\[respuesta\]/g, '________')
      .replace(/\[persona a la derecha\]/, 'la persona a mi derecha')
      .replace(/\[persona a la izquierda\]/, 'la persona a mi izquierda')
      .concat('.');
  }

  render() {
    const { text } = this.props.card;

    return (
      <div className="Card QuestionCard">
        <p className="card-text">{this.formattedText}</p>
      </div>
    );
  }
}
