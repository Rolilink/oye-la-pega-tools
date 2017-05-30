import React from 'react';
import PropTypes from 'prop-types';
import connectToDeckListContainer from '../containers/DeckListContainer';
import DeckList from './DeckList';


class DeckListView extends React.Component {
  static propTypes = {
    fetchDecksList: PropTypes.func.isRequired,
    decks: PropTypes.arrayOf(PropTypes.object).isRequired,
    isFetching: PropTypes.bool.isRequired,
  }

  componentWillMount() {
    this.props.fetchDecksList();
  }

  get listView() {
    const { decks } = this.props;

    return (<DeckList {...{ decks }} />);
  }

  get loadingView() {
    return (<span>Loading .....</span>);
  }

  get deckListOrLoading() {
    const { isFetching } = this.props;

    return isFetching ? this.loadingView : this.listView;
  }

  render() {
    return (
      <div className="container">
        <h1>Select a Deck</h1>
        {this.deckListOrLoading}
      </div>
    );
  }
}

export const component = DeckListView;

export default connectToDeckListContainer(DeckListView);
