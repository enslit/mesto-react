import { useState, useEffect } from 'react';
import Card from './Card';
import { api } from '../utils/Api';
import spinner from '../images/spinner.svg';

function Main({ onAddPlace, onEditAvatar, onEditProfile, onCardClick }) {
  const [userName, setUserName] = useState('Загрузка...');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState(spinner);
  const [cards, setCards] = useState([]);

  const setUserData = (userData) => {
    setUserName(userData.name);
    setUserDescription(userData.about);
    setUserAvatar(userData.avatar);
  };

  useEffect(() => {
    Promise.all([
      api.getMe(),
      api.getInitialCards(),
    ])
      .then(([userData, initialCards]) => {
        setUserData(userData);
        setCards(initialCards);
      })
      .catch((err) => {
        console.error(err.message);
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
        <ul className='cards__list'>
          {cards.map(card => <Card card={card} onCardClick={onCardClick} />)}
        </ul>
      </section>
    </main>
  );
}

export default Main;