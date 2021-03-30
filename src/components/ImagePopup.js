import React from 'react';

function ImagePopup(props) {
  return (
    <div className="popup popup_type_image">
      <div className="popup__container popup__container_image">
        <button type="button" aria-label="Закрыть" className="popup__close btn btn_type_close" />
        <img src="#" alt="Изображение карточки" className="popup__image" />
        <h2 className="popup__sign" />
      </div>
    </div>
  );
}

export default ImagePopup;