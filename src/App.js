import './App.css';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import store from "./utils/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Sidebar />
      </div>
    </Provider>
  );
}

export default App;
