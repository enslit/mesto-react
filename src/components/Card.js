import React, { useContext, useState } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';
import Loader from './Loader';

function DeleteButton({onClickDelete}) {
  return <button
    type='button'
    aria-label='Удалить'
    className='card__delete btn btn_type_delete'
    onClick={onClickDelete}
  />
}

function LikeButton({isLiked, onClickLike, count}) {
  const classes = `btn btn_type_like ${isLiked && 'btn_type_like-active'}`;

  return (
    <>
      <button
        type='button'
        aria-label='Нравится'
        className={classes}
        onClick={onClickLike}
      />
      <span className='card__like-cnt'>{count}</span>
    </>
  )
}

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const [isLikeFetching, setIsLikeFetching] = useState(false);
  const {_id: currentUserId} = useContext(CurrentUserContext);

  const isOwner = card.owner._id === currentUserId;
  const isLiked = card.likes.some(user => user._id === currentUserId);

  const handleCardClick = () => {
    onCardClick(card);
  };

  const handleLikeClick = () => {
    onCardLike(card, setIsLikeFetching);
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
            {
              isLikeFetching
                ? <Loader size={30} color="black" />
                : <LikeButton onClickLike={handleLikeClick} isLiked={isLiked} count={card.likes.length} />
            }
          </div>
        </div>
      </article>
    </li>
  );
}

export default Card;