import keenIO from './keenIO';

export default function mixPanelDecorator(trackFunction) {
  return (...rArgs) => {
    const args = [...rArgs, keenIO.recordEvent.bind(keenIO)];

    return trackFunction(...args);
  };
}
