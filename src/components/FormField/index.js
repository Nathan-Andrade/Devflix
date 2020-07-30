import React from 'react';
import PropTypes from 'prop-types';

function FormField({ label, type, name, value, onChange }){
  const fieldId = `id_${name}`

  return(
    <div>
    <label
      htmlFor={fieldId}
    >
     {label}: 
      <input
        id={}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
      />
    </label>
</div>
  )
}

FormField.propTypes = {
  label, type, name, value, onChange
}

export default FormField;