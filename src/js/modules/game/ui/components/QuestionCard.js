import React from 'react';

export default class AnswerCard extends React.PureComponent {
  render() {
    const { text } = this.props.card;

    return (
      <div className={`card question-card ${this.isSelectedClass}`}>
        <p className="card-text">{text}</p>
      </div>
    );
  }
}
