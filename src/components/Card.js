import React, {useContext} from 'react';
import CurrentUserContext from '../contexts/user/CurrentUserContext';

function DeleteButton() {
  return <button type='button' aria-label='Удалить' className='card__delete btn btn_type_delete' />
}

function LikeButton({isLiked}) {
  const classes = `btn btn_type_like ${isLiked && 'btn_type_like-active'}`;

  return (
    <button type='button' aria-label='Нравится' className={classes} />
  )
}

function Card({ card, onCardClick }) {
  const {_id: currentUserId} = useContext(CurrentUserContext);

  const isOwner = card.owner._id === currentUserId;
  const isLiked = card.likes.some(user => user._id === currentUserId);

  const handleCardClick = () => {
    onCardClick(card);
  };

  return (
    <li className='cards__list-item'>
      <article className='card'>
        { isOwner && <DeleteButton /> }
        <img src={card.link} alt={card.name} className='card__image' onClick={handleCardClick} />
        <div className='card__description'>
          <h2 className='card__title'>{card.name}</h2>
          <div className='card__like'>
            <LikeButton isLiked={isLiked} />
            <span className='card__like-cnt'>{card.likes.length || ''}</span>
          </div>
        </div>
      </article>
    </li>
  );
}

export default Card;