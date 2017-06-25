import React from 'react';
import PropTypes from 'prop-types';
import DeckListItem from './DeckListItem';


export default class DeckList extends React.Component {
  static propTypes = {
    decks: PropTypes.arrayOf(PropTypes.any).isRequired,
  }

  getDeckItem(deck) {
    return (<DeckListItem deck={deck} key={`deck-item-${deck.id}`} />);
  }

  get listRows() {
    return this.props.decks.map(deck => this.getDeckItem(deck));
  }

  get listHeader() {
    return ([
      <th>Nombre</th>,
      <th># De Preguntas</th>,
      <th># De Respuestas</th>,
      <th>Acciones</th>,
    ]);
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            {this.listHeader}
          </tr>
        </thead>
        <tbody>
          {this.listRows}
        </tbody>
      </table>
    );
  }
}
