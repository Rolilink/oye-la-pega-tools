import mixpanel from 'mixpanel-browser';
import {
  MIXPANEL_PROJECT_TOKEN,
} from './constants';

mixpanel.init(MIXPANEL_PROJECT_TOKEN);

export default mixpanel;
