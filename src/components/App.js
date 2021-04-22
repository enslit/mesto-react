import React, { useState, useEffect, useContext } from 'react';
import CurrentUserContext from '../contexts/user/CurrentUserContext';
import { api } from '../utils/Api';
import { logError } from '../utils/utils';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './Popups/ImagePopup';
import EditProfilePopup from './Popups/EditProfilePopup';
import EditAvatarPopup from './Popups/EditAvatarPopup';
import AddPlacePopup from './Popups/AddPlacePopup';
import ConfirmDeleteCardPopup from './Popups/ConfirmDeleteCardPopup';

function App() {
  const [loading, setLoading] = useState(true);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [deletingCardId, setDeletingCardId] = useState(null);
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

  const handleDeleteCardClick = (id) => {
    setDeletingCardId(id);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleUpdateUser = (userData) => {
    setFormSubmitting(true);
    api.updateProfile(userData)
      .then(newUserData => {
        setCurrentUser(newUserData);
        setIsEditProfilePopupOpen(false);
      })
      .catch(logError)
      .finally(() => setFormSubmitting(false));
  }

  const handleUpdateAvatar = (formData) => {
    setFormSubmitting(true);
    api.updateAvatar(formData)
      .then(newUserData => {
        setCurrentUser(newUserData);
        setIsEditAvatarPopupOpen(false);
      })
      .catch(logError)
      .finally(() => setFormSubmitting(false));
  }

  const handleAddPlaceSubmit = (cardData) => {
    setFormSubmitting(true);
    api.postCard(cardData)
      .then((newCard) => {
        setCards([
          newCard,
          ...cards
        ])
        setIsAddPlacePopupOpen(false);
      })
      .catch(logError)
      .finally(() => setFormSubmitting(false));
  }

  const handleDeleteCardSubmit = (id) => {
    setFormSubmitting(true);
    api.delete(id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== id));
        setDeletingCardId(null);
      })
      .catch(logError)
      .finally(() => setFormSubmitting(false))
  }

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(user => user._id === currentUser._id);

    api.like(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      });
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setDeletingCardId(null);
    setSelectedCard(null);
  };

  useEffect(() => {
    setLoading(true);

    Promise.all([
      api.getUserInfo(),
      api.getCardList()
    ])
      .then(([userData, cardList]) => {
        setCurrentUser(userData);
        setCards(cardList);
      })
      .catch(logError)
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Header />
        <Main
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleDeleteCardClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          loading={loading}
        />
        <Footer />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <EditProfilePopup
          open={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          submitting={formSubmitting}
        />
        <AddPlacePopup
          open={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          submitting={formSubmitting}
        />
        <ConfirmDeleteCardPopup
          cardId={deletingCardId}
          onClose={closeAllPopups}
          onDeleteCard={handleDeleteCardSubmit}
          submitting={formSubmitting}
        />
        <EditAvatarPopup
          open={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          submitting={formSubmitting}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
