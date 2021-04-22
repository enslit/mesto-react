import React from 'react';
import PopupWithForm from './PopupWithForm';

function ConfirmDeleteCardPopup({cardId, onClose, onDeleteCard, submitting}) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onDeleteCard(cardId)
  }

  return (
    <PopupWithForm
      title='Вы уверены?'
      buttonText='Да'
      name='delete'
      isOpen={!!cardId}
      onClose={onClose}
      onSubmit={handleSubmit}
      submitting={submitting}
    >
      <input type='hidden' className='form__input form__input_type_id' name='id' />
    </PopupWithForm>
  );
}

export default ConfirmDeleteCardPopup;