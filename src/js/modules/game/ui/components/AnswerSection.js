import React from 'react';
import AnswerCard from './AnswerCard';

export default class AnswerSection extends React.PureComponent {

  get answerCards() {
    return this.answers.map(answer => this.getAnswerCard(answer));
  }

  get answers() {
    const { answers } = this.props;

    return answers || [];
  }

  getAnswerCard(answer) {
    return (
      <AnswerCard card={answer} />
    );
  }

  render() {
    return (
      <div className="AnswerSection">
        {this.answerCards}
      </div>
    );
  }
}
