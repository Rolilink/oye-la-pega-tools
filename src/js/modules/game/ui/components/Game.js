import React from 'react';

export default class Game extends React.Component {

  componentDidMount() {
    this.props.startNewRound();
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
