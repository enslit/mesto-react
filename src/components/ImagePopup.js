function ImagePopup({ card, onClose }) {
  const popupClasses = `popup popup_type_image ${card ? 'popup_opened' : ''}`;

  return (
    <div className={popupClasses}>
      <div className='popup__container popup__container_image'>
        <button type='button' aria-label='Закрыть' className='popup__close btn btn_type_close' onClick={onClose} />
        <img src={card && card.link} alt={card && card.name} className='popup__image' />
        <h2 className='popup__sign'>{card && card.name}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;