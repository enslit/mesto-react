import React, { useContext, useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/user/CurrentUserContext';

function EditProfilePopup({ onClose, onUpdateUser, open, submitting }) {
  const currentUser = useContext(CurrentUserContext);
  const [userName, setUserName] = useState(currentUser.name);
  const [userAbout, setUserAbout] = useState(currentUser.about);

  const onChangeUserNameInput = (evt) => {
    setUserName(evt.target.value);
  }

  const onChangeUserAboutInput = (evt) => {
    setUserAbout(evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onUpdateUser({
      name: userName,
      about: userAbout
    })
  }

  useEffect(() => {
    setUserName(currentUser.name);
    setUserAbout(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      title='Редактировать профиль'
      name='edit-profile'
      isOpen={open}
      onClose={onClose}
      onSubmit={handleSubmit}
      submitting={submitting}
    >
      <label className='form__field'>
        <input
          type='text'
          name='name'
          id='name-input'
          className='form__input form__input_type_name'
          required
          minLength='2'
          maxLength='40'
          value={userName}
          onChange={onChangeUserNameInput}
        />
        <span className='form__input-error name-input-error' />
      </label>
      <label className='form__field'>
        <input
          type='text'
          name='about'
          id='about-input'
          className='form__input form__input_type_about'
          required
          minLength='2'
          maxLength='200'
          value={userAbout}
          onChange={onChangeUserAboutInput}
        />
        <span className='form__input-error about-input-error' />
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;