import React from 'react';

export default class AnswerCard extends React.PureComponent {

  get isSelectedClass() {
    const { isSelected } = this.props;

    return isSelected ? 'card-selected' : '';
  }

  render() {
    const { text } = this.props.card;

    return (
      <div className={`card answer-card ${this.isSelectedClass}`} onClick={this.props.onClick}>
        <p className="card-text">{text}</p>
      </div>
    );
  }
}
