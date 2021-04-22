import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ open, onClose, onUpdateAvatar, submitting }) {
  const ref = React.useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: ref.current.value
    })
  }

  return (
    <PopupWithForm
      title='Обновить аватар'
      name='update-profile'
      isOpen={open}
      onClose={onClose}
      onSubmit={handleSubmit}
      submitting={submitting}
    >
      <label className='form__field'>
        <input
          ref={ref}
          type='url'
          name='avatar'
          id='avatar-input'
          className='form__input form__input_type_link'
          required
        />
        <span className='form__input-error avatar-input-error' />
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;