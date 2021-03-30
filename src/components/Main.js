import React from 'react';
import spinner from '../images/spinner.svg'

function Main(props) {
  const handleEditAvatarClick = (evt) => {
    document.querySelector('.popup_type_update-profile').classList.add('popup_opened')
  }

  const handleEditProfileClick = (evt) => {
    document.querySelector('.popup_type_edit-profile').classList.add('popup_opened')
  }

  const handleAddPlaceClick = (evt) => {
    document.querySelector('.popup_type_add-card').classList.add('popup_opened')
  }

  return (
    <main className="content container">
      <section className="profile">
        <div className="profile__avatar-wrapper" onClick={handleEditAvatarClick}>
          <img src={spinner} alt="Аватар" className="profile__avatar" />
        </div>
        <div className="profile__details">
          <div className="profile__text">
            <h1 className="profile__name">Загрузка...</h1>
            <button type="button"
              aria-label="Редактировать профиль"
              className="btn btn_type_edit-profile"
              onClick={handleEditProfileClick}
            />
          </div>
          <p className="profile__about" />
        </div>
        <button type="button"
                aria-label="Добавить новую карточку"
                className="btn btn_type_add-card"
                onClick={handleAddPlaceClick}
        />
      </section>

      <section className="cards">
        <ul className="cards__list" />
      </section>
    </main>
  );
}

export default Main;