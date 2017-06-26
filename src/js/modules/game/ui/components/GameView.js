import React from 'react';
import PropTypes from 'prop-types';
import GameContainer from '../containers/GameContainer';
import Game from './Game';


export default class GameView extends React.Component {

  static propTypes = {
    gameId: PropTypes.string.isRequired,
  }

  render() {
    const { gameId } = this.props;

    return (
      <div className="GameView">
        <GameContainer gameId={gameId}>
          { props => <Game {...props} /> }
        </GameContainer>
      </div>
    );
  }
}
