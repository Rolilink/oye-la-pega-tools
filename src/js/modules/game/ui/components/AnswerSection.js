import React from 'react';
import AnswerCard from './AnswerCard';
import BoringCard from './BoringCard';
import '../styles/AnswerSection.css';

export default class AnswerSection extends React.PureComponent {

  get answerCards() {
    return this.answers.map(answer => this.getAnswerCard(answer));
  }

  get boringCard() {
    return this.answers.length > 0 ? <BoringCard /> : null;
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
        <div className="Hand">
          {this.answerCards}
          {this.boringCard}
        </div>
      </div>
    );
  }
}
