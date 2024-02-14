import logo from './logo.svg';
import './App.css';
import { MyRoute } from './MyRoute';
import { combineReducers, createStore } from 'redux';
import countReducer from './reducer/countReducer';
import { Provider } from 'react-redux';
import { gameReducer } from './reducer/GameReducer';
import itemReducer from './reducer/itemReducer';
import cartReducer from './reducer/cartReducer';
import { ToastContainer } from 'react-toastify';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

function App() {

  const persistConfig = {
    key: 'root',
    storage,
  }

  const combinedReducer = combineReducers({
    // count: countReducer,
    // game: gameReducer
    item: itemReducer,
    cart: cartReducer
  })

  const persistedReducer = persistReducer(persistConfig, combinedReducer)

  const stores = createStore(persistedReducer)
  let persistor = persistStore(stores)

  return (
    <>
      <Provider store={stores}>
        <PersistGate persistor={persistor}>
          <ToastContainer position='top-center' />
          <MyRoute />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
