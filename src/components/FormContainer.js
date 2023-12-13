// Inside FormContainer.js

import React from "react";
import PropTypes from "prop-types";
import "./FormContainer.css";

const FormContainer = ({ inputLabel, options, showDiv, divVisible, divVisible1, divVisible2, divVisible3 }) => {
  return (
    <div className="custom-form-container">
      <div className="custom-form-label">{inputLabel}</div>
      <select className="custom-form-select">
        <option value="" >
          Please Select
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

FormContainer.propTypes = {
  inputLabel: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  showDiv: PropTypes.bool,
  divVisible: PropTypes.bool,
  divVisible1: PropTypes.bool,
  divVisible2: PropTypes.bool,
  divVisible3: PropTypes.bool,
};

export default FormContainer;