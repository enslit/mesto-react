import React from 'react';
import spinner from '../images/spinner.svg'

function Main({onAddPlace, onEditAvatar, onEditProfile}) {
  return (
    <main className="content container">
      <section className="profile">
        <div className="profile__avatar-wrapper" onClick={onEditAvatar}>
          <img src={spinner} alt="Аватар" className="profile__avatar" />
        </div>
        <div className="profile__details">
          <div className="profile__text">
            <h1 className="profile__name">Загрузка...</h1>
            <button type="button"
              aria-label="Редактировать профиль"
              className="btn btn_type_edit-profile"
              onClick={onEditProfile}
            />
          </div>
          <p className="profile__about" />
        </div>
        <button type="button"
                aria-label="Добавить новую карточку"
                className="btn btn_type_add-card"
                onClick={onAddPlace}
        />
      </section>

      <section className="cards">
        <ul className="cards__list" />
      </section>
    </main>
  );
}

export default Main;