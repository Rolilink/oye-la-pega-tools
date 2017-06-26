import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { data as decksData } from '../../../decks';
import {
  setNewRound,
  pickWinners,
  markAllAnswersAsBoring,
} from '../../data';

const { fetchAndSetActiveDeck } = decksData;

function getInitialState() {
  return { selectedAnswers: [] };
}

class GameContainer extends React.Component {
  static propTypes = {
    gameId: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.any).isRequired,
    question: PropTypes.any.isRequired,
    requiredAnswers: PropTypes.number.isRequired,
    setNewRound: PropTypes.func.isRequired,
    pickWinners: PropTypes.func.isRequired,
    markAllAnswersAsBoring: PropTypes.func.isRequired,
    fetchAndSetActiveDeck: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired,
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
      onMarkAllAsBoring: () => this.markAllAsBoring(),
      selectAnswer: answerId => this.selectAnswer(answerId),
      deselectAnswer: answerId => this.deselectAnswer(answerId),
      startNewGame: () => this.startNewGame(this.props.gameId),
    };
  }

  get childrenWithProps() {
    return this.props.children(this.propsToPass);
  }

  get allAnswersSelected() {
    const { requiredAnswers } = this.props;
    const { selectedAnswers } = this.state;

    return selectedAnswers.length === requiredAnswers;
  }

  selectAnswer(selectedAnswer) {
    const { requiredAnswers } = this.props;
    const { selectedAnswers } = this.state;

    if (selectedAnswers.length + 1 === requiredAnswers) {
      this.pickWinners([...selectedAnswers, selectedAnswer]);
    }

    this.setState({ selectedAnswers: [...selectedAnswers, selectedAnswer] });
  }

  deselectAnswer(selectedAnswer) {
    const { selectedAnswers } = this.state;
    const newSelectedAnswers = _.omitBy(selectedAnswers, answer => answer.id === selectedAnswer.id);

    this.setState({ selectedAnswers: newSelectedAnswers });
  }

  markAllAsBoring() {
    this.props.markAllAnswersAsBoring()
      .then(() => this.startNewRound());
  }

  pickWinners(selectedAnswers) {
    this.props.pickWinners(selectedAnswers)
      .then(() => this.startNewRound());
  }

  startNewRound() {
    this.setState(getInitialState());
    this.props.setNewRound();
  }

  startNewGame(deckId) {
    this.props.fetchAndSetActiveDeck(deckId)
      .then(() => this.startNewRound());
  }

  render() {
    return <div>{this.childrenWithProps}</div>;
  }
}

const mapDispatchToProps = {
  setNewRound,
  pickWinners,
  markAllAnswersAsBoring,
  fetchAndSetActiveDeck,
};

const mapStateToProps = (state) => {
  const { game, decks } = state;
  const { round } = game;
  const { answers, question, requiredAnswers } = round;
  const { activeDeck } = decks;
  const { deck } = activeDeck;

  return { answers, question, requiredAnswers, activeDeck: deck };
};

export const component = GameContainer;
export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
