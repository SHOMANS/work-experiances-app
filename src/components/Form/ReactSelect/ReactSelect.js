import React from "react";
import { Field } from "formik";

function ReactSelect(props) {
  return (
    <Field>
      {({
        field: { value },
        form: { setFieldValue, errors, touched, setFieldTouched },
      }) => (
        <>
          {props.as({ value, setFieldValue, setFieldTouched, props })}
          {errors.color && <div className={"error"}>{errors.color}</div>}
        </>
      )}
    </Field>
  );
}

export default ReactSelect;
