import React from "react";
import PropTypes from "prop-types";
import styles from "./filter.module.css";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <label className={styles.filter__label}>
      Find contacts by name
      <br />
      <input
        type="text"
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
        placeholder="Type name... "
        className={styles.filter__input}
      />
    </label>
  );
};
Filter.defaultProps = {
  onChangeFilter: () => {},
};
Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func,
};
export default Filter;
