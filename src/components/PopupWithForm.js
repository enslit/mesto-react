import React from 'react';
import Loader from './Loder';

function PopupWithForm({ title, name, isOpen, onClose, onSubmit, children, submitting }) {
  const popupClasses = `popup popup_type_${name} ${isOpen && 'popup_opened'}`;

  return (
    <div className={popupClasses}>
      <div className='popup__container'>
        <button
          type='button'
          aria-label='Закрыть'
          className='popup__close btn btn_type_close'
          onClick={onClose}
        />
        <h2 className='popup__title'>{title}</h2>
        <form
          name={`form-${name}`}
          className={`form form_type_${name}`}
          noValidate
          onSubmit={onSubmit}
        >
          {children}
          <button
            type='submit'
            name='save'
            className='form__save'
          >
            {submitting ? <Loader size={30} count={15} speed={700} /> : "Сохранить"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;