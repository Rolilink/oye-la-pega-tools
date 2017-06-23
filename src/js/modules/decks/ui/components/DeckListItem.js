import React from 'react';
import { join as joinPath } from 'path';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { GAME_DECK_PATH } from '../../constants';

export default class DeckListItem extends React.PureComponent {
  static propTypes = {
    deck: PropTypes.object.isRequired,
  };

  get selectDeckLink() {
    const { deck } = this.props;

    return joinPath('/', GAME_DECK_PATH, `${deck.id}`);
  }

  render() {
    const { name, answers_quantity, questions_quantity } = this.props.deck;
    return (
      <tr>
        <td>{name}</td>
        <td>{questions_quantity}</td>
        <td>{answers_quantity}</td>
        <td><Link className="btn btn-primary" to={this.selectDeckLink}>Probar Deck</Link></td>
      </tr>
    );
  }
}
