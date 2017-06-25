import React from 'react';
import AnswerSection from './AnswerSection';
import QuestionSection from './QuestionSection';


export default class Game extends React.Component {

  componentDidMount() {
    const { gameId } = this.props;

    this.props.startNewGame(gameId);
  }

  render() {
    return (
      <div>
        <QuestionSection question={this.props.question} />
        <AnswerSection
          answers={this.props.answers}
          selectedAnswers={this.props.selectedAnswers}
          allAnswersSelected={this.props.allAnswersSelected}
          onSelectCardsClick={this.props.onSelectWinners}
          onBoringButttonClick={this.props.onMarkAllAsBoring}
          onCardSelect={this.props.selectAnswer}
          onCardDeselect={this.props.deselectAnswer}
        />
      </div>
    );
  }
}
