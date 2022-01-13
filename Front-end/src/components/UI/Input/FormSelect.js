import React from "react";
import "./Input.css";

const FormSelect = (props) => {
  let selectElement = null;
  var inputclasses = ["InputElement"];

  if (props.invalid && props.touched) {
    const index = inputclasses.indexOf("pop");
    if (index > -1) inputclasses.splice(index, 1);

    inputclasses.push("Invalid");
  } else if (props.touched) {
    const index = inputclasses.indexOf("pop");
    if (index > -1) inputclasses.splice(index, 1);
    inputclasses.push("Valid");
  }

  let error = <p>s</p>;

  if (props.msg !== "" && props.touched)
    error = <p className="text-success error-msg">{props.msg}</p>;

  if (props.errors !== "" && props.touched)
    error = (
      <p style={{ color: "red" }} className="  error-msg">
        {props.errors}
      </p>
    );
  else if (!props.touched) error = <p style={{ opacity: "0" }}>a</p>;

  selectElement = (
    <select onChange={props.changed} value={props.value} className="SelectElement">
      {props.options.map((option) => {
        return <option key={option.value} value={option.value}>{option.label}</option>;
      })}
    </select>
  );
  return (
    <div className="Input">
      {selectElement}
      {error}
    </div>
  );
};

export default FormSelect;
