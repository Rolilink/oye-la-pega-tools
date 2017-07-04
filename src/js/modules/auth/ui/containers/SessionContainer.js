import { connect } from 'react-redux';
import { destroySession } from '../../data/actionsCreators';

const mapStateToProps = (state) => {
  const { auth } = state;
  const { session } = auth;

  return session;
};

const mapDispatchToProps = {
  destroySession,
};

export default function createContainer(View) {
  return connect(mapStateToProps, mapDispatchToProps)(View);
}
