import KeenTracking from 'keen-tracking';
import { KEENIO_PROJECT_ID, KEENIO_WRITE_KEY } from '../constants';

// Configure a client instance
export default new KeenTracking({
  projectId: KEENIO_PROJECT_ID,
  writeKey: KEENIO_WRITE_KEY,
});
