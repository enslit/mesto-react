import React, { useState, useEffect } from 'react';
import Card from './Card';
import { api } from '../utils/Api';
import spinner from '../images/spinner.svg';
import Loader from './Loder';

function Main({ onAddPlace, onEditAvatar, onEditProfile, onCardClick }) {
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState('Загрузка...');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState(spinner);
  const [cards, setCards] = useState([]);

  const buildCardList = (cardList) => {
    return (
      <ul className='cards__list'>
        {cardList.map(card => <Card key={card._id} card={card} onCardClick={onCardClick} />)}
      </ul>
    )
  }

  const setUserData = (userData) => {
    setUserName(userData.name);
    setUserDescription(userData.about);
    setUserAvatar(userData.avatar);
  };

  useEffect(() => {
    setLoading(true);

    Promise.all([
      api.getUserInfo(),
      api.getCardList(),
    ])
      .then(([userData, cardList]) => {
        setUserData(userData);
        setCards(cardList);
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main className='content container'>
      <section className='profile'>
        <div className='profile__avatar-wrapper' onClick={onEditAvatar}>
          <img src={userAvatar} alt='Аватар' className='profile__avatar' />
        </div>
        <div className='profile__details'>
          <div className='profile__text'>
            <h1 className='profile__name'>{userName}</h1>
            <button type='button'
                    aria-label='Редактировать профиль'
                    className='btn btn_type_edit-profile'
                    onClick={onEditProfile}
            />
          </div>
          <p className='profile__about'>{userDescription}</p>
        </div>
        <button type='button'
                aria-label='Добавить новую карточку'
                className='btn btn_type_add-card'
                onClick={onAddPlace}
        />
      </section>

      <section className='cards'>
        {
          loading
            ? <Loader />
            : buildCardList(cards)
        }
      </section>
    </main>
  );
}

export default Main;