import React from 'react';
import '../styles/QuestionCard.css';

export default class QuestionCard extends React.PureComponent {
  get formattedText() {
    const { text } = this.props.card;

    return text
      .replace('[respuesta]', '________')
      .replace('[persona a la derecha]', 'la persona a mi derecha')
      .replace('[persona a la izquierda]', 'la persona a mi izquierda')
      .concat('.')
  }

  render() {
    const { text } = this.props.card;

    return (
      <div className={`Card QuestionCard ${this.isSelectedClass}`}>
        <p className="card-text">{this.formattedText}</p>
      </div>
    );
  }
}
