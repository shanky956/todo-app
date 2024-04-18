
import { Provider } from 'react-redux'

import './App.css'
import store from './redux/store'
import Todo from './components/Todo'

function App() {

  return (
    <>
    <Provider store={store}>
      <Todo />
    </Provider>
    </>
  )
}

export default App
