import React, { useEffect, useRef } from 'react';

function FormInput(props) {
  const {onChange} = props;
  const errorRef = useRef();
  const inputRef = useRef();

  const handleChange = (evt) => {
    const { value, validity } = evt.target;
    onChange(value, validity.valid);
  }

  useEffect(() => {
    const { validity, validationMessage } = inputRef.current;

    if (validity.valid) {
      errorRef.current.textContent = '';
    } else {
      errorRef.current.textContent = validationMessage;
    }
  }, [props.value])

  return (
    <label className='form__field'>
      <input
        {...props}
        ref={inputRef}
        onChange={handleChange}
      />
      <span ref={errorRef} className='form__input-error name-input-error' />
    </label>
  );
}

export default FormInput;