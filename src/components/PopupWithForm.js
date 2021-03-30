import React from 'react';

function PopupWithForm({title, name, children}) {
  return (
    <div className={`popup popup_type_${name}`}>
      <div className="popup__container">
        <button type="button" aria-label="Закрыть" className="popup__close btn btn_type_close" />
        <h2 className="popup__title">{ title }</h2>
        <form name={`form form_type_${name}`} className={`form form_type_${name}`} noValidate>
          { children }
          <button type="submit" name="save" className="form__save">Сохранить</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;