import React from 'react';
import GameContainer from '../containers/GameContainer';
import Game from './Game';


export default class GameView extends React.Component {

  render() {
    const { gameId } = this.props;

    return (
      <div className="GameView">
        <GameContainer>
          <Game gameId={gameId} />
        </GameContainer>
      </div>
    );
  }
}
