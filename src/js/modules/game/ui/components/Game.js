import React from 'react';
import PropTypes from 'prop-types';
import AnswerSection from './AnswerSection';
import QuestionSection from './QuestionSection';


export default class Game extends React.Component {

  static propTypes = {
    answers: PropTypes.arrayOf(PropTypes.any).isRequired,
    question: PropTypes.any.isRequired,
    selectedAnswers: PropTypes.arrayOf(PropTypes.any).isRequired,
    onMarkAllAsBoring: PropTypes.func.isRequired,
    selectAnswer: PropTypes.func.isRequired,
    deselectAnswer: PropTypes.func.isRequired,
    startNewGame: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.startNewGame();
  }

  render() {
    return (
      <div>
        <QuestionSection question={this.props.question} />
        <AnswerSection
          answers={this.props.answers}
          selectedAnswers={this.props.selectedAnswers}
          onBoringButtonClick={this.props.onMarkAllAsBoring}
          onCardSelect={this.props.selectAnswer}
          onCardDeselect={this.props.deselectAnswer}
        />
      </div>
    );
  }
}
