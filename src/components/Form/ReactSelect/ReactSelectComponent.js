import React from "react";
import Select from "react-select";

function ReactSelectComponent({
  setFieldTouched,
  value,
  setFieldValue,
  props: { name, defaultValue, placeholder, options },
}) {
  return (
    <Select
      onClick={() => setFieldTouched(name, true)}
      className="basic-single"
      classNamePrefix="select"
      defaultValue={defaultValue || ""}
      placeholder={placeholder}
      isSearchable={true}
      name={name}
      options={options}
      setValue={value[name]}
      onChange={(value) => setFieldValue(name, value.value)}
    />
  );
}

export default ReactSelectComponent;
