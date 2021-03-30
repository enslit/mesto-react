import React from 'react';

function Card({card, onCardClick}) {
  const handleCardClick = () => {
    onCardClick(card)
  }

  return (
    <li className="cards__list-item">
      <article className="card">
        <button type="button" aria-label="Удалить" className="card__delete card__delete_hidden btn btn_type_delete" />
        <img src={card.link} alt={card.name} className="card__image" onClick={handleCardClick} />
        <div className="card__description">
          <h2 className="card__title">{card.name}</h2>
          <div className="card__like">
            <button type="button" aria-label="Нравится" className="btn btn_type_like" />
            <span className="card__like-cnt">{card.likes.length || ''}</span>
          </div>
        </div>
      </article>
    </li>
  );
}

export default Card;