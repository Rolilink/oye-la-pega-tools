import { connect } from 'react-redux';
import { loginWithEmailAndPassword } from '../actionsCreators';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  loginWithEmailAndPassword,
};

export default function createContainer(View) {
  return connect(mapStateToProps, mapDispatchToProps)(View);
}
