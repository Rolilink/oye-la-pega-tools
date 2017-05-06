/* #
 * TODO: Refactor this to just a component
 * TODO: Find a way to use composition and props to inject the Provider and Router
 */

import React from 'react';

class App extends React.PureComponent {
  render() {
    return (<div> {this.props.children} </div>);
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default function createApp({ store, Router, Provider }) {
  return (
    <App>
      <Provider store={store}>
        {Router}
      </Provider>
    </App>
  );
}
