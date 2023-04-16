import './App.css';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Button from './component/Buttonlist';
import store from "./utils/store";
import { Provider } from "react-redux";
import ButtonList from './component/Buttonlist';

function App() {
  return (
    <Provider store={store}>
        <Header />
        <div className="flex">
          <Sidebar />
          <ButtonList />
        </div>
    </Provider>
  );
}

export default App;
