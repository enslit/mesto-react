import React, { useState, useEffect, useContext } from 'react';
import CurrentUserContext from '../contexts/user/CurrentUserContext';
import { api } from '../utils/Api';
import { logError } from '../utils/utils';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';

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

  const handleUpdateUser = (userData) => {
    api.updateProfile(userData)
      .then(newUserData => {
        setCurrentUser(newUserData);
        setIsEditProfilePopupOpen(false);
      })
      .catch(logError)
  }

  const handleUpdateAvatar = (formData) => {
    console.log(formData);
    api.updateAvatar(formData)
      .then(newUserData => {
        setCurrentUser(newUserData);
        setIsEditAvatarPopupOpen(false);
      })
      .catch(logError)
  }

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
      .catch(logError)
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

        <EditProfilePopup
          open={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

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

        <EditAvatarPopup
          open={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
