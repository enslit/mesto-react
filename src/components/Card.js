import React, {useContext} from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function DeleteButton({onClickDelete}) {
  return <button
    type='button'
    aria-label='Удалить'
    className='card__delete btn btn_type_delete'
    onClick={onClickDelete}
  />
}

function LikeButton({isLiked, onClickLike}) {
  const classes = `btn btn_type_like ${isLiked && 'btn_type_like-active'}`;

  return (
    <button
      type='button'
      aria-label='Нравится'
      className={classes}
      onClick={onClickLike}
    />
  )
}

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const {_id: currentUserId} = useContext(CurrentUserContext);

  const isOwner = card.owner._id === currentUserId;
  const isLiked = card.likes.some(user => user._id === currentUserId);

  const handleCardClick = () => {
    onCardClick(card);
  };

  const handleLikeClick = () => {
    onCardLike(card);
  }

  const handleDeleteClick = () => {
    onCardDelete(card._id);
  }

  return (
    <li className='cards__list-item'>
      <article className='card'>
        { isOwner && <DeleteButton onClickDelete={handleDeleteClick} /> }
        <img
          src={card.link}
          alt={card.name}
          className='card__image'
          onClick={handleCardClick}
        />
        <div className='card__description'>
          <h2 className='card__title'>{card.name}</h2>
          <div className='card__like'>
            <LikeButton onClickLike={handleLikeClick} isLiked={isLiked} />
            <span className='card__like-cnt'>{card.likes.length || ''}</span>
          </div>
        </div>
      </article>
    </li>
  );
}

export default Card;