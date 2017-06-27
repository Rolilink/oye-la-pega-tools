import { keenIODecorator } from '../../../libs/metrics';
import * as trackFunctions from './trackFunctions';

export eventTypes from './eventTypes';

export const trackAnswerShown = keenIODecorator(trackFunctions.trackAnswerShown);
export const trackQuestionShown = keenIODecorator(trackFunctions.trackQuestionShown);
export const trackQuestionAnswered = keenIODecorator(trackFunctions.trackQuestionAnswered);
export const trackAnswerNotSelectedWinner = keenIODecorator(trackFunctions.trackAnswerNotSelectedWinner);
export const trackAnswerSelectedWinner = keenIODecorator(trackFunctions.trackAnswerSelectedWinner);
