import {createContext} from 'react';
import spinner from '../images/spinner.svg';

const CurrentUserContext = createContext({
  _id: null,
  name: 'Загрузка...',
  about: '',
  avatar: spinner,
})

export default CurrentUserContext;