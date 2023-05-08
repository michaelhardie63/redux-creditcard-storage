import { Provider } from 'react-redux';
import store from './redux/store';
import CreditCardForm from './components/CreditCardForm';
import CreditCardDisplay from './components/CreditCardDisplay';
import './styles.css';

function App() {
  return (
    <Provider store={store}>
      <h1>Securely store your credit card information</h1>
      <div className='container'>
        <CreditCardForm />
        <CreditCardDisplay />
      </div>
    </Provider>
  );
}

export default App;