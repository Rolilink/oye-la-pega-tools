import React from 'react';
import _ from 'lodash';
import AnswerCard from './AnswerCard';
import BoringCard from './BoringCard';
import '../styles/AnswerSection.css';

export default class AnswerSection extends React.PureComponent {

  get answerCards() {
    return this.answers.map(answer => this.getAnswerCard(answer));
  }

  get boringCard() {
    return this.answers.length > 0 ? <BoringCard onClick={this.props.onBoringButttonClick} /> : null;
  }

  get answers() {
    const { answers } = this.props;

    return answers || [];
  }

  getOnClickHandler(answer) {
    if (this.isSelectedAnswer(answer)) {
      return this.props.onCardDeselect;
    } else {
      return this.props.onCardSelect;
    }
  }

  isSelectedAnswer(answer) {
    const { selectedAnswers } = this.props;

    return !!_.find(selectedAnswers, selectAnswer => selectAnswer.id === answer.id);
  }

  getAnswerCard(answer) {
    return (
      <AnswerCard
        card={answer}
        onClick={this.getOnClickHandler(answer)}
        isSelected={this.isSelectedAnswer(answer)}
      />
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
