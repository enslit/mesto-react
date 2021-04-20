import React, { useState, useEffect, useContext } from 'react';
import CurrentUserContext from '../contexts/user/CurrentUserContext';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { api } from '../utils/Api';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState(useContext(CurrentUserContext));

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  };

  useEffect(() => {
    api.getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.error(err.message);
      })
  }, []);


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm
          title='Редактировать профиль'
          name='edit-profile'
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
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
            />
            <span className='form__input-error about-input-error' />
          </label>
        </PopupWithForm>

        <PopupWithForm
          title='Новое место'
          name='add-card'
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
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
            />
            <span className='form__input-error link-input-error' />
          </label>
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <PopupWithForm title='Вы уверены?' name='delete'>
          <input type='hidden' className='form__input form__input_type_id' name='id' />
        </PopupWithForm>

        <PopupWithForm
          title='Обновить аватар'
          name='update-profile'
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <label className='form__field'>
            <input
              type='url'
              name='avatar'
              id='avatar-input'
              className='form__input form__input_type_link'
              required
            />
            <span className='form__input-error avatar-input-error' />
          </label>
        </PopupWithForm>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
