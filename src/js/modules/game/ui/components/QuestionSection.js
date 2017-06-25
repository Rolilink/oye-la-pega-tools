import React from 'react';
import _ from 'lodash';
import QuestionCard from './QuestionCard';
import '../styles/QuestionSection.css'

export default class QuestionSection extends React.PureComponent {

  get questionCard() {
    const { question } = this.props;

    if (_.isEmpty(question)) {
      return null;
    }

    return <QuestionCard card={question} />
  }

  render() {
    return (
      <div className="QuestionSection">
        {this.questionCard}
      </div>
    );
  }
}
