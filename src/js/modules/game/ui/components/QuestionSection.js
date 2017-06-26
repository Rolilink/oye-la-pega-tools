import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import QuestionCard from './QuestionCard';
import '../styles/QuestionSection.css';

export default class QuestionSection extends React.PureComponent {

  static propTypes = {
    question: PropTypes.any.isRequired,
  }

  get questionCard() {
    const { question } = this.props;

    if (_.isEmpty(question)) {
      return null;
    }

    return <QuestionCard card={question} />;
  }

  render() {
    return (
      <div className="QuestionSection">
        {this.questionCard}
      </div>
    );
  }
}
