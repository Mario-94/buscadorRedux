import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Buscador from './components/Buscador';
import { Provider } from 'react-redux';
import store from './redux/store';

 
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="row">
          <div className="">
            <div className="card mt-5" style={{ maxWidth: '470px' }}>
              <div className="row no-gutters">
                <div className="col-12">
                  <div className="card-body">
                    <div className="card-title h4 text-center">
                      <Buscador />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </Provider>
  );
}

export default App;
