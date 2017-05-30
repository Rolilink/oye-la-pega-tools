import { connect } from 'react-redux';
import { fetchDecksList } from '../../data';


const mapStateToProps = (state) => {
  const { decks } = state;
  const { decksList } = decks;

  return { ...decksList };
};

const mapDispatchToProps = {
  fetchDecksList,
};

export default function createContainer(View) {
  return connect(mapStateToProps, mapDispatchToProps)(View);
}
