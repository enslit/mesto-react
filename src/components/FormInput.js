import React, { useRef } from 'react';

function FormInput(props) {
  const {onChange} = props;
  const errorRef = useRef();

  const handleChange = (evt) => {
    const { value, validity, validationMessage } = evt.target;

    if (validity.valid) {
      errorRef.current.textContent = '';
    } else {
      errorRef.current.textContent = validationMessage;
    }

    onChange(value, validity.valid);
  }

  return (
    <label className='form__field'>
      <input
        {...props}
        onChange={handleChange}
      />
      <span ref={errorRef} className='form__input-error name-input-error' />
    </label>
  );
}

export default FormInput;