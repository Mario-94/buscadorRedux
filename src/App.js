import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Pokemones from './components/Pokemones';
import { Provider } from 'react-redux';

import generateStore from './redux/store';
import BuscadorLineas from './components/BuscadorLineas';
import ContactForm from './components/ContactForm';

function App() {
  const store = generateStore()
  return (

    <Provider store={store}>
      <Pokemones />
      <ContactForm />
      {/* <BuscadorLineas /> */}
    </Provider>
  );
}

export default App;
