import React, { useEffect, useRef, useState } from 'react';

function FormInput(props) {
  const [leave, setLeave] = useState(false);
  const {onChange} = props;
  const errorRef = useRef();
  const inputRef = useRef();

  const handleBlur = () => {
    setLeave(true);
  }

  const handleChange = (evt) => {
    const { value, validity } = evt.target;
    onChange(value, validity.valid);
  }

  useEffect(() => {
    if (leave) {
      const { validity, validationMessage } = inputRef.current;

      if (validity.valid) {
        errorRef.current.textContent = '';
      } else {
        errorRef.current.textContent = validationMessage;
      }
    }
  }, [props.value, leave])

  return (
    <label className='form__field'>
      <input
        {...props}
        ref={inputRef}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <span ref={errorRef} className='form__input-error name-input-error' />
    </label>
  );
}

export default FormInput;