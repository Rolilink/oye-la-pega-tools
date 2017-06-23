import React from 'react';
import QuestionCard from './cards/QuestionCard';

export default class QuestionSection extends React.PureComponent {

  get questionCard() {
    const { question } = this.props;

    if (!question) {
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
