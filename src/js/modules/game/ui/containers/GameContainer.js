import React from 'react-redux';
import { connect } from 'redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {
  setNewRound,
  pickWinnersAndStartNewRound,
  markAllAnswersAsBoringAndStartNewRound,
} from '../../data';

function getInitialState() {
  return { selectedAnswers: [] };
}

class GameContainer extends React.Component {
  static propTypes = {
    answers: PropTypes.arrayOf(PropTypes.any).isRequired,
    question: PropTypes.Object.isRequired,
    requiredAnswers: PropTypes.number.isRequired,
    setNewRound: PropTypes.func.isRequired,
    pickWinnersAndStartNewRound: PropTypes.func.isRequired,
    markAllAnswersAsBoringAndStartNewRound: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = getInitialState();
  }

  get propsToPass() {
    const { answers, question } = this.props;
    const { selectedAnswers } = this.state;

    return {
      answers,
      question,
      selectedAnswers,
      allAnswersSelected: this.allAnswersSelected,
      onSelectWinners: () => this.pickAnswers(),
      onMarkAllAsBoring: () => this.markAllAsBoring(),
      selectAnswer: answerId => this.selectAnswer(answerId),
      deselectAnswer: answerId => this.deselectAnswer(answerId),
      startNewRound: () => this.startNewRound(),
    };
  }

  get childrenWithProps() {
    return React.Children.map(
      this.props.children,
      child => React.cloneElement(child, this.propsToPass)
    );
  }

  get allAnswersSelected() {
    const { requiredAnswers } = this.props;
    const { selectedAnswers } = this.state;

    return selectedAnswers.length === requiredAnswers;
  }

  selectAnswer(answerId) {
    const { answers } = this.props;
    const { selectedAnswers } = this.state;

    if (!this.allAnswersSelected) {
      return;
    }

    const selectedAnswer = _.find(answers, answer => answer.id === answerId);

    this.setState({ selectedAnswers: [...selectedAnswers, selectedAnswer] });
  }

  deselectAnswer(answerId) {
    const { selectedAnswers } = this.state;
    const newSelectedAnswers = _.omitBy(selectedAnswers, answer => answer.id === answerId);

    this.setState({ selectedAnswers: newSelectedAnswers });
  }

  markAllAsBoring() {
    this.props.markAllAnswersAsBoringAndStartNewRound();
  }

  pickAnswers() {
    const { selectedAnswers } = this.state;

    this.props.pickWinnersAndStartNewRound(selectedAnswers);
  }

  startNewRound() {
    this.props.setNewRound();
  }

  render() {
    return <div>{this.childrenWithProps}</div>;
  }
}

const mapDispatchToProps = {
  setNewRound,
  pickWinnersAndStartNewRound,
  markAllAnswersAsBoringAndStartNewRound,
};

const mapStateToProps = (state) => {
  const { game } = state;
  const { round } = game;

  return { round };
};

export const component = GameContainer;
export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
