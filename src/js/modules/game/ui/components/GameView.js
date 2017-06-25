import React from 'react';
import GameContainer from '../containers/GameContainer';
import Game from './Game';


export default class GameView extends React.Component {

  render() {
    const { gameId } = this.props;

    return (
      <GameContainer>
        <Game gameId={gameId} />
      </GameContainer>
    );
  }
}
