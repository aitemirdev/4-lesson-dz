import { Provider } from 'react-redux';
import store from './store';
import Counter from './Counter';
import RegisterForm from './RegisterForm';

const App = () => {
  return (
      <Provider store={store}>
        <Counter />
        <RegisterForm />
      </Provider>
  );
};

export default App;