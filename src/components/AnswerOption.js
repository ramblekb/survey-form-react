import React from 'react';
import PropTypes from 'prop-types';

function AnswerOption(props) {
  return (
    <li className="answerOption">
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.answerNumber === props.answer}
        id={props.answerNumber}

        value={props.answerNumber}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      <label className="radioCustomLabel" htmlFor={props.answerNumber}>
        {props.answerContent}
      </label>
    </li>
  );
}

AnswerOption.propTypes = {
  // answerType: PropTypes.string.isRequired,
  answerNumber: PropTypes.number.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;
