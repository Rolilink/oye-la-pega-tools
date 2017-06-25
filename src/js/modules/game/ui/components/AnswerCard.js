import React from 'react';
import '../styles/AnswerCard.css';

export default class AnswerCard extends React.PureComponent {

  get isSelectedClass() {
    const { isSelected } = this.props;

    return isSelected ? 'Selected' : '';
  }

  render() {
    const { text } = this.props.card;

    return (
      <div className={`Card AnswerCard ${this.isSelectedClass}`} onClick={e => this.props.onClick(this.props.card)}>
        <p className="card-text">{text}</p>
      </div>
    );
  }
}
