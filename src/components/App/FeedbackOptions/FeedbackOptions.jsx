import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
import btnBgColorFun from './btnBgColor';

function FeedbackOptions({ options, onLeaveFeedback }) {
  console.log(btnBgColorFun);
  return (
    <ul className={css.list}>
      {options.map(option => {
        return (
          <li className={css.item} key={option}>
            <button
              className={css.button}
              style={{ backgroundColor: btnBgColorFun(option) }}
              type="button"
              name={option}
              onClick={onLeaveFeedback}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.prototype = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  btnBgColorFun: PropTypes.func.isRequired,
};

export default FeedbackOptions;
