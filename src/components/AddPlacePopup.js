import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ open, onClose, onAddPlace, submitting }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  const handleChangeNameInput = (evt) => {
    setName(evt.target.value);
  }

  const handleChangeLinkInput = (evt) => {
    setLink(evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onAddPlace({name, link})
  }

  return (
    <PopupWithForm
      title='Новое место'
      name='add-card'
      isOpen={open}
      onClose={onClose}
      onSubmit={handleSubmit}
      submitting={submitting}
    >
      <label className='form__field'>
        <input
          type='text'
          name='name'
          id='place-input'
          placeholder='Название'
          className='form__input form__input_type_card-name'
          required
          minLength='2'
          maxLength='30'
          value={name}
          onChange={handleChangeNameInput}
        />
        <span className='form__input-error place-input-error' />
      </label>
      <label className='form__field'>
        <input
          type='url'
          name='link'
          id='link-input'
          placeholder='Ссылка на картинку'
          className='form__input form__input_type_link'
          required
          value={link}
          onChange={handleChangeLinkInput}
        />
        <span className='form__input-error link-input-error' />
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;