import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import AnswerCard from './AnswerCard';
import BoringCard from './BoringCard';
import '../styles/AnswerSection.css';

export default class AnswerSection extends React.PureComponent {

  static propTypes = {
    answers: PropTypes.any.isRequired,
    selectedAnswers: PropTypes.arrayOf(PropTypes.any).isRequired,
    onBoringButtonClick: PropTypes.func.isRequired,
    onCardSelect: PropTypes.func.isRequired,
    onCardDeselect: PropTypes.func.isRequired,
  }

  getAnswerCard(answer) {
    return (
      <AnswerCard
        card={answer}
        key={`answerCard-${answer.id}`}
        onClick={this.getOnClickHandler(answer)}
        isSelected={this.isSelectedAnswer(answer)}
      />
    );
  }

  getOnClickHandler(answer) {
    if (this.isSelectedAnswer(answer)) {
      return this.props.onCardDeselect;
    }

    return this.props.onCardSelect;
  }

  isSelectedAnswer(answer) {
    const { selectedAnswers } = this.props;

    return !!_.find(selectedAnswers, selectAnswer => selectAnswer.id === answer.id);
  }

  get answers() {
    const { answers } = this.props;

    return answers || [];
  }

  get answerCards() {
    return this.answers.map(answer => this.getAnswerCard(answer));
  }

  get boringCard() {
    return this.answers.length > 0 ? <BoringCard onClick={this.props.onBoringButtonClick} /> : null;
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
