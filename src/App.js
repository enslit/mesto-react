import logo from './images/logo.svg';
import spinner from './images/spinner.svg';

function App() {
  return (
    <div className="page">
      <header className="header container">
        <a href="/" className="logo" target="_self">
          <img src={logo} alt="Mesto Russia" className="logo__img" />
        </a>
      </header>
      <main className="content container">
        <section className="profile">
          <div className="profile__avatar-wrapper">
            <img src={spinner} alt="Аватар" className="profile__avatar" />
          </div>
          <div className="profile__details">
            <div className="profile__text">
              <h1 className="profile__name">Загрузка...</h1>
              <button type="button" aria-label="Редактировать профиль" className="btn btn_type_edit-profile"></button>
            </div>
            <p className="profile__about"></p>
          </div>
          <button type="button" aria-label="Добавить новую карточку" className="btn btn_type_add-card"></button>
        </section>

        <section className="cards">
          <ul className="cards__list"></ul>
        </section>
      </main>
      <footer className="footer container">
        <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
      </footer>

      <div className="popup popup_type_edit-profile">
        <div className="popup__container">
          <button type="button" aria-label="Закрыть" className="popup__close btn btn_type_close"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form name="edit-profile" className="form form_type_edit-profile" noValidate>
            <label className="form__field">
              <input type="text"
                     name="name"
                     id="name-input"
                     className="form__input form__input_type_name"
                     required
                     minLength="2"
                     maxLength="40"
              />
                <span className="form__input-error name-input-error"></span>
            </label>
            <label className="form__field">
              <input type="text"
                     name="about"
                     id="about-input"
                     className="form__input form__input_type_about"
                     required
                     minLength="2"
                     maxLength="200"
              />
                <span className="form__input-error about-input-error"></span>
            </label>
            <button type="submit" name="save" className="form__save">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_add-card">
        <div className="popup__container">
          <button type="button" aria-label="Закрыть" className="popup__close btn btn_type_close"></button>
          <h2 className="popup__title">Новое место</h2>
          <form name="add-card" className="form form_type_add-card" noValidate>
            <label className="form__field">
              <input type="text"
                     name="name"
                     id="place-input"
                     placeholder="Название"
                     className="form__input form__input_type_card-name"
                     required
                     minLength="2"
                     maxLength="30"
              />
                <span className="form__input-error place-input-error"></span>
            </label>
            <label className="form__field">
              <input type="url"
                     name="link"
                     id="link-input"
                     placeholder="Ссылка на картинку"
                     className="form__input form__input_type_link"
                     required
              />
                <span className="form__input-error link-input-error"></span>
            </label>
            <button type="submit" name="save" className="form__save">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_image">
        <div className="popup__container popup__container_image">
          <button type="button" aria-label="Закрыть" className="popup__close btn btn_type_close"></button>
          <img src="#" alt="Изображение карточки" className="popup__image" />
            <h2 className="popup__sign"></h2>
        </div>
      </div>

      <div className="popup popup_type_delete">
        <div className="popup__container">
          <button type="button" aria-label="Закрыть" className="popup__close btn btn_type_close"></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <form name="delete-card" className="form form_type_delete-card" noValidate>
            <input type="hidden" className="form__input form__input_type_id" name="id" />
              <button type="submit" name="delete" className="form__save">Да</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_update-profile">
        <div className="popup__container">
          <button type="button" aria-label="Закрыть" className="popup__close btn btn_type_close"></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form name="edit-profile" className="form form_type_update-avatar" noValidate>
            <label className="form__field">
              <input type="url"
                     name="avatar"
                     id="avatar-input"
                     className="form__input form__input_type_link"
                     required
              />
                <span className="form__input-error avatar-input-error"></span>
            </label>
            <button type="submit" name="save" className="form__save">Сохранить</button>
          </form>
        </div>
      </div>

      <template id="cardTemplate">
        <li class="cards__list-item">
          <article class="card">
            <button type="button" aria-label="Удалить" class="card__delete card__delete_hidden btn btn_type_delete"></button>
            <img src="./images/photo-1.jpg" alt="Карачаевск" class="card__image" />
              <div class="card__description">
                <h2 class="card__title">Карачаевск</h2>
                <div class="card__like">
                  <button type="button" aria-label="Нравится" class="btn btn_type_like"></button>
                  <span class="card__like-cnt"></span>
                </div>
              </div>
          </article>
        </li>
      </template>
    </div>
  );
}

export default App;
