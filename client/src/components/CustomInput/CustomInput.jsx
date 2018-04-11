import React from "react";
import { withStyles, FormControl, InputLabel, Input } from "material-ui";
import { Clear, Check } from "material-ui-icons";
import cx from "classnames";

import customInputStyle from "./../../variables/styles/customInputStyle";

function CustomInput({ ...props }) {
  const {
    classes,
    formControlProps,
    labelText,
    id,
    labelProps,
    error,
    success,
    value,
    onChange,
    name
  } = props;

  const labelClasses = cx({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error
  });
  const inkbarClasses = cx({
    [classes.inkbarError]: error,
    [classes.inkbarSuccess]: success && !error,
    [classes.inkbar]: !success && !error
  });
  const marginTop = cx({
    [classes.marginTop]: labelText === undefined
  });
  return (
    <FormControl
      {...formControlProps}
      className={formControlProps.className + " " + classes.formControl}
    >
      {labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot + labelClasses}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        classes={{
          root: marginTop,
          disabled: classes.disabled,
          underline: classes.underline,
          inkbar: inkbarClasses
        }}
        id={id}
        onChange={onChange}
        value={value}
        name={name}
      />
      {error ? (
        <Clear className={classes.feedback + " " + classes.labelRootError} />
      ) : success ? (
        <Check className={classes.feedback + " " + classes.labelRootSuccess} />
      ) : null}
    </FormControl>
  );
}

export default withStyles(customInputStyle)(CustomInput);
