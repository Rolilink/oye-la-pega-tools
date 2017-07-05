/* #
 * TODO: Refactor this to just a component
 * TODO: Find a way to use composition and props to inject the Provider and Router
 */

import React from 'react';
import PropTypes from 'prop-types';

class App extends React.PureComponent {
  render() {
    return (<div> {this.props.children} </div>);
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function createApp({ store, Router, Provider }) {
  return (
    <App>
      <Provider store={store}>
        <Router />
      </Provider>
    </App>
  );
}
