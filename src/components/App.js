import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />

      <PopupWithForm title="Редактировать профиль" name="edit-profile">
        <label className="form__field">
          <input type="text"
                 name="name"
                 id="name-input"
                 className="form__input form__input_type_name"
                 required
                 minLength="2"
                 maxLength="40"
          />
          <span className="form__input-error name-input-error" />
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
          <span className="form__input-error about-input-error" />
        </label>
      </PopupWithForm>

      <PopupWithForm title="Новое место" name="add-card">
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
          <span className="form__input-error place-input-error" />
        </label>
        <label className="form__field">
          <input type="url"
                 name="link"
                 id="link-input"
                 placeholder="Ссылка на картинку"
                 className="form__input form__input_type_link"
                 required
          />
          <span className="form__input-error link-input-error" />
        </label>
      </PopupWithForm>

      <ImagePopup />

      <PopupWithForm title="Вы уверены?" name="delete">
        <input type="hidden" className="form__input form__input_type_id" name="id" />
      </PopupWithForm>

      <PopupWithForm title="Обновить аватар" name="update-profile">
        <label className="form__field">
          <input type="url"
                 name="avatar"
                 id="avatar-input"
                 className="form__input form__input_type_link"
                 required
          />
          <span className="form__input-error avatar-input-error" />
        </label>
      </PopupWithForm>

      <template id="cardTemplate">
        <li className="cards__list-item">
          <article className="card">
            <button type="button" aria-label="Удалить" className="card__delete card__delete_hidden btn btn_type_delete" />
            <img src="../images/photo-1.jpg" alt="Карачаевск" className="card__image" />
              <div className="card__description">
                <h2 className="card__title">Карачаевск</h2>
                <div className="card__like">
                  <button type="button" aria-label="Нравится" className="btn btn_type_like" />
                  <span className="card__like-cnt" />
                </div>
              </div>
          </article>
        </li>
      </template>
    </div>
  );
}

export default App;
